// Site index for LLMs, per https://llmstxt.org/
import type { APIRoute } from "astro";

import { PROFILE_LINKS, SITE_DESCRIPTION, SITE_TITLE } from "../config";
import { getLlmPages, oneLine } from "../lib/llm-pages";

export const GET: APIRoute = async ({ site }) => {
  const pages = await getLlmPages();
  const abs = (path: string) => new URL(path, site!).href;

  const lines = [
    `# ${SITE_TITLE}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "Phil Ewels is a software developer and bioinformatician in Stockholm, Sweden, working on",
    "open-source tools for high-throughput genomics data. This site lists his work history,",
    "software projects, conference talks and peer-reviewed publications.",
    "",
    `Every page below is also available as Markdown by appending \`.md\` to its URL. The whole`,
    `site as a single document is at ${abs("/llms-full.txt")}.`,
    "",
    "",
    "## Profiles",
    "",
    ...PROFILE_LINKS.map((link) => `- [${link.label}](${link.href})`),
  ];

  let section = "";
  let group = "";
  for (const page of pages) {
    if (page.section !== section) {
      section = page.section;
      group = "";
      // Two blank lines above each heading, so sections stay legible when read raw.
      lines.push("", "", `## ${section}`, "");
    }
    if (page.group && page.group !== group) {
      group = page.group;
      lines.push("", `### ${group}`, "");
    }
    const suffix = page.description ? `: ${oneLine(page.description)}` : "";
    lines.push(`- [${page.title}](${abs(`${page.path}.md`)})${suffix}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
