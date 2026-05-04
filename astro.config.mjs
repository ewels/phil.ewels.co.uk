import { EventEmitter } from "node:events";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// Workaround for https://github.com/withastro/astro/issues/15883 — Astro 6's dev
// server attaches >10 FSWatcher listeners, triggering Node's leak warning.
EventEmitter.defaultMaxListeners = 20;

// https://astro.build/config
export default defineConfig({
  site: "https://phil.ewels.co.uk",
  integrations: [icon(), mdx(), sitemap(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
