// The whole site as one Markdown document, for models that would rather ingest than crawl.
import type { APIRoute } from "astro";

import { SITE_DESCRIPTION, SITE_TITLE } from "../config";
import { getLlmPages, renderMarkdown } from "../lib/llm-pages";

export const GET: APIRoute = async ({ site }) => {
  const pages = await getLlmPages();

  const parts = [`# ${SITE_TITLE}`, `> ${SITE_DESCRIPTION}`, `Source: ${new URL("/", site!).href}`];

  let section = "";
  for (const page of pages) {
    if (page.section !== section) {
      section = page.section;
      parts.push(`\n---\n\n# ${section}`);
    }
    parts.push(renderMarkdown(page, site!, { standalone: false }));
  }

  return new Response(parts.join("\n\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
