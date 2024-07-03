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
        sidebarPath: require.resolve('./sidebars.ts'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
      },
      theme: {
        customCss: './src/css/globals.css'
      }
    } satisfies Preset.Options
  ]
]

export default presets
