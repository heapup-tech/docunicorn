import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

const theme = {
  // Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  defaultMode: 'dark',
  navbar: {
    title: 'My Site',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.png'
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Tutorial'
      },
      { to: '/blog', label: 'Blog', position: 'left' },
      {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right'
      }
    ]
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula
  }
} satisfies Preset.ThemeConfig

export default theme
