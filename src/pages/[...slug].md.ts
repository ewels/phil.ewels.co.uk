// Raw Markdown source for every content page: /projects/multiqc -> /projects/multiqc.md
import type { APIRoute, GetStaticPaths } from "astro";

import { getLlmPages, renderMarkdown, type LlmPage } from "../lib/llm-pages";

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getLlmPages();
  return pages.map((page) => ({ params: { slug: page.slug }, props: { page } }));
};

export const GET: APIRoute = ({ props, site }) =>
  new Response(renderMarkdown(props.page as LlmPage, site!), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
