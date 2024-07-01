import type { ContentCollectionKey } from 'astro:content'

type NavbarItem = {
  label: string
  href: string
  collection: ContentCollectionKey
}

type Config = {
  site: {
    name: string
    url: string
  }
  navbar: NavbarItem[]
}

const config: Config = {
  site: {
    name: 'AstroDiem',
    url: 'https://astrodiem.com'
  },
  navbar: [
    {
      label: 'Markdown',
      href: '/markdown/syntax',
      collection: 'markdown'
    },
    {
      label: 'Article',
      href: '/blog',
      collection: 'blog'
    }
  ]
}

export default config
