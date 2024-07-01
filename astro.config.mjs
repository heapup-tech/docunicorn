import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), preact()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  markdown: {
    syntaxHighlight: 'shiki'
  }
});