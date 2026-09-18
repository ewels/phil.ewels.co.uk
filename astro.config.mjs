import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://phil.ewels.co.uk",
  integrations: [icon(), mdx(), sitemap(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
