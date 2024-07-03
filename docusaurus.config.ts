import type { Config } from '@docusaurus/types'
import theme from './config/theme'
import presets from './config/presets'
import plugins from './config/plugins'

const config: Config = {
  title: 'DocTemplate',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  plugins: plugins,
  presets: presets,
  themeConfig: theme
}

export default config
