// import math from 'remark-math'
// import katex from 'rehype-katex'
import type * as Preset from '@docusaurus/preset-classic'
import path from 'path'

const presets = [
  [
    'classic',
    {
      docs: {
        path: './content',
        routeBasePath: '/',
        showLastUpdateTime: true,
        sidebarPath: require.resolve('./sidebars.ts')
      },
      blog: {
        path: 'blog',
        showReadingTime: true
      },
      theme: {
        customCss: './src/css/globals.css'
      }
    } satisfies Preset.Options
  ]
]

export default presets
