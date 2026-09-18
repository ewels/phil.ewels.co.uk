// Shared page index for the site's Markdown surface.
//
// One list, three consumers: the `/**/*.md` raw-source routes, the `llms.txt`
// / `llms-full.txt` endpoints, and the `rel="alternate"` head tag in BaseHead.
// Deriving all three from here is what keeps the head tag from advertising a
// `.md` that no route generates.

import { getCollection, type CollectionEntry } from "astro:content";

import { SITE_AUTHOR, SITE_BLURB } from "../config";
import publications from "../publications.json";

type AnyEntry =
  | CollectionEntry<"projects">
  | CollectionEntry<"publications">
  | CollectionEntry<"talks">
  | CollectionEntry<"workplaces">
  | CollectionEntry<"education">;

export interface LlmPage {
  /** Page path without leading/trailing slash, e.g. `projects/multiqc`. */
  slug: string;
  /** Rendered page path, e.g. `/projects/multiqc`. */
  path: string;
  section: string;
  /** Subheading within the section, where the section has them (projects). */
  group?: string;
  title: string;
  description: string;
  /** Sort key — newest first within a section. */
  date?: Date;
  /** Metadata lines rendered above the body. */
  meta: string[];
  body: string;
}

// Order here is the order sections appear in llms.txt and llms-full.txt:
// career first, then what came out of it.
const SECTIONS = [
  { collection: "workplaces", label: "Work", base: "work" },
  { collection: "education", label: "Education", base: "education" },
  { collection: "projects", label: "Projects", base: "projects" },
  { collection: "talks", label: "Talks", base: "talks" },
  { collection: "publications", label: "Publications", base: "publications" },
] as const;

/** `<a href="x">y</a>` -> `[y](x)`, so links survive being flattened to text. */
function inlineLinks(s: string): string {
  return s.replace(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, label) => {
    const text = label
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return `[${text}](${href})`;
  });
}

function attrsOf(tag: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const m of tag.matchAll(/([\w-]+)="([^"]*)"/g)) attrs[m[1]] = m[2];
  return attrs;
}

/**
 * `<TimeLineElement>` renders as a styled timeline on the site, which flattens to an
 * unreadable run of JSX in Markdown. Each entry is really a dated bullet, so write it
 * as one. Content comes from either a `desc` attribute or the element's children.
 */
function timelineToList(inner: string): string {
  const bullet = (tag: string, children = "") => {
    const { title, subtitle, desc } = attrsOf(tag);
    const body = [desc ?? "", inlineLinks(children).replace(/<[^>]+>/g, "")]
      .map((s) => s.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .join(" ");
    const head = subtitle ? `**${title}** (${subtitle})` : `**${title}**`;
    return `- ${head}${body ? ` — ${body}` : ""}`;
  };

  return (
    inner
      .replace(/<TimeLineElement\b([^>]*?)\/>/g, (_, tag) => bullet(tag))
      .replace(/<TimeLineElement\b([^>]*?)>([\s\S]*?)<\/TimeLineElement>/g, (_, tag, kids) => bullet(tag, kids))
      // The source indents each element inside the container; left as-is, every bullet
      // after the first reads as a nested sub-item.
      .split("\n")
      .map((line) => line.trimStart())
      .filter(Boolean)
      .join("\n")
  );
}

/** Turn an MDX body into something worth reading as plain Markdown. */
function toPlainMarkdown(body: string): string {
  return body
    .replace(/^(?:import\s.+?(?:;|\n)|export\s.+?(?:;|\n)|\s*\n)+/, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}\s*/g, "")
    .replace(/<div class="time-line-container[^"]*">([\s\S]*?)<\/div>/g, (_, inner) => timelineToList(inner))
    .trim();
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function metaFor(entry: AnyEntry): string[] {
  const d = entry.data as Record<string, unknown>;
  const meta: string[] = [];

  const push = (label: string, value: unknown) => {
    if (value !== undefined && value !== null && value !== "") meta.push(`${label}: ${value}`);
  };

  if (entry.collection === "publications") {
    const pub = (publications as Record<string, any>)[d.doi as string];
    push("Journal", d.journal);
    push("Published", formatDate(d.pubDate as Date));
    push("DOI", `https://doi.org/${d.doi}`);
    if (pub?.author?.length) {
      const names = pub.author.map((a: any) => [a.given, a.family].filter(Boolean).join(" ")).filter(Boolean);
      push("Authors", names.join(", "));
    }
    return meta;
  }

  if (entry.collection === "talks") {
    push("Type", d.type);
    push("Date", formatDate(d.date as Date));
    push("Location", d.online ? (d.location ? `${d.location} (online)` : "Online") : d.location);
    if (d.keynote) push("Keynote", "yes");
    for (const url of (d.eventURLs as string[]) ?? []) push("Event", url);
    for (const url of (d.pdfURLs as string[]) ?? []) push("Slides", url);
    for (const id of (d.youtubeIDs as string[]) ?? []) push("Video", `https://www.youtube.com/watch?v=${id}`);
    return meta;
  }

  push("Subtitle", d.subtitle);
  push("Location", d.location);
  push("Website", d.projectURL ?? d.URL);
  if (d.github) push("GitHub", `https://github.com/${d.github}`);
  push("Elgato Marketplace", d.marketplaceURL);
  if (d.startDate) {
    const end = d.endDate ? formatDate(d.endDate as Date) : "present";
    push("Dates", `${formatDate(d.startDate as Date)} to ${end}`);
  }
  if (d.archived) push("Status", "archived");
  return meta;
}

// Projects are grouped and ordered the way /projects renders them, rather than by date.
const PROJECT_GROUPS = [
  "Work projects",
  "Work projects (archived)",
  "Personal projects",
  "Personal projects (archived)",
];

function projectGroup(d: Record<string, unknown>): string {
  return `${d.personal ? "Personal" : "Work"} projects${d.archived ? " (archived)" : ""}`;
}

function sortDate(entry: AnyEntry): Date | undefined {
  const d = entry.data as Record<string, unknown>;
  return (d.date ?? d.pubDate ?? d.startDate) as Date | undefined;
}

let cache: LlmPage[] | undefined;

/** Every page whose source is Markdown, newest first within each section. */
export async function getLlmPages(): Promise<LlmPage[]> {
  if (cache) return cache;

  const pages: LlmPage[] = [];
  for (const { collection, label, base } of SECTIONS) {
    const entries = (await getCollection(collection)) as AnyEntry[];
    const section = entries.map((entry) => {
      const d = entry.data as Record<string, unknown>;
      return {
        slug: `${base}/${entry.id}`,
        path: `/${base}/${entry.id}`,
        section: label,
        group: collection === "projects" ? projectGroup(d) : undefined,
        order: (d.order as number) ?? Number.MAX_SAFE_INTEGER,
        title: entry.data.title,
        description: (d.description as string) ?? "",
        date: sortDate(entry),
        meta: metaFor(entry),
        body: toPlainMarkdown(entry.body ?? ""),
      };
    });

    if (collection === "projects") {
      section.sort((a, b) => PROJECT_GROUPS.indexOf(a.group!) - PROJECT_GROUPS.indexOf(b.group!) || a.order - b.order);
    } else {
      section.sort((a, b) => (b.date?.valueOf() ?? 0) - (a.date?.valueOf() ?? 0));
    }

    pages.push(...section.map(({ order, ...page }) => page));
  }

  cache = pages;
  return pages;
}

/** Frontmatter descriptions are often wrapped over several lines; a blockquote isn't. */
export function oneLine(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Some metadata values are site-relative paths (slide PDFs), which point nowhere once
 * the file is read away from the site.
 */
function absoluteMeta(line: string, site: URL): string {
  const split = line.indexOf(": ");
  const value = line.slice(split + 2);
  return value.startsWith("/") ? `${line.slice(0, split)}: ${new URL(value, site).href}` : line;
}

/** Quote every scalar, so colons and quotes in titles and URLs can't break the YAML. */
function yamlScalar(v: string): string {
  return `"${v.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/**
 * There is no standard for per-page Markdown — llmstxt.org covers only the index file.
 * This follows the closest thing to a convention (what Mintlify-hosted docs serve:
 * YAML frontmatter with title, description and url) and adds the site fields, so a
 * page fetched on its own still says whose site it came from.
 */
function frontmatter(page: LlmPage, site: URL): string {
  const fields: Array<[string, string | string[]]> = [
    ["title", page.title],
    ["description", oneLine(page.description)],
    ["url", new URL(page.path, site).href],
    ["site", new URL("/", site).host],
    ["author", SITE_AUTHOR],
    ["section", page.section],
  ];
  if (page.group) fields.push(["group", page.group]);

  // `meta` is already ordered "Label: value" lines; reuse it rather than describing
  // every field twice. Repeated labels (Event, Video, Slides) become YAML lists.
  const grouped = new Map<string, string[]>();
  for (const line of page.meta.map((l) => absoluteMeta(l, site))) {
    const split = line.indexOf(": ");
    const key = line.slice(0, split).toLowerCase().replace(/\s+/g, "_");
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(line.slice(split + 2));
  }
  for (const [key, values] of grouped) fields.push([key, values.length > 1 ? values : values[0]]);

  const lines = fields
    .filter(([, v]) => (Array.isArray(v) ? v.length > 0 : v !== ""))
    .map(([key, v]) =>
      Array.isArray(v)
        ? `${key}:\n${v.map((item) => `  - ${yamlScalar(item)}`).join("\n")}`
        : `${key}: ${yamlScalar(v)}`,
    );
  return ["---", ...lines, "---"].join("\n");
}

/**
 * A page as Markdown. Standalone adds the frontmatter and closing context needed by
 * something reading the file alone; llms-full.txt passes `standalone: false`, since it
 * carries that context once at the top and repeating it 116 times is only noise.
 */
export function renderMarkdown(page: LlmPage, site: URL, { standalone = true } = {}): string {
  const parts: string[] = [];
  if (standalone) parts.push(frontmatter(page, site));

  parts.push(`${standalone ? "#" : "##"} ${page.title}`);
  if (page.description) parts.push(`> ${oneLine(page.description)}`);
  if (!standalone) {
    const meta = page.meta.map((line) => absoluteMeta(line, site));
    parts.push([`Source: ${new URL(page.path, site).href}`, ...meta].join("\n"));
  }

  // Root-relative links break as soon as the page is read away from the site.
  if (page.body) parts.push(page.body.replace(/\]\(\/(?!\/)/g, `](${new URL("/", site).href}`));

  if (standalone) {
    parts.push(
      [
        "---",
        "",
        `From the personal website of ${SITE_AUTHOR}, ${SITE_BLURB}: ${new URL("/", site).href}`,
        `The whole site as Markdown: ${new URL("/llms.txt", site).href}`,
      ].join("\n"),
    );
  }
  return parts.join("\n\n") + "\n";
}
