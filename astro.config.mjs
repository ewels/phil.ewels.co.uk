import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://phil.ewels.co.uk",
  integrations: [icon(), mdx(), sitemap(), tailwind(), svelte()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()],
      },
    },
  },
});
