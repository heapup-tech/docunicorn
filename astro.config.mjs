import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  markdown: {
    syntaxHighlight: 'shiki'
  }
})
