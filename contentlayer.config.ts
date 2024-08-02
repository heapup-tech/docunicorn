import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { visit } from 'unist-util-visit'
import { isTerminalLanguage } from './src/lib/terminal'

const themes = {
  light: 'light-plus',
  dark: 'dracula'
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    draft: { type: 'boolean', required: false, default: false },
    toc: { type: 'boolean', default: true, required: false }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children

            if (codeEl.tagName !== 'code') return
            node.__rawString__ = codeEl.children?.[0].value
          }
        })
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: themes
        }
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) return

            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') return

            const hasTitle = node.children.at(0).tagName === 'figcaption'
            const language = preElement.properties['data-language']

            preElement.properties['__withTitle__'] = hasTitle
            preElement.properties['__rawString__'] = node.__rawString__

            if (language) preElement.properties['__language__'] = language

            if (!hasTitle && isTerminalLanguage(language)) {
              node.children.unshift({
                type: 'element',
                tagName: 'figcaption',
                properties: {
                  'data-rehype-pretty-code-title': '',
                  'data-language': language,
                  'data-theme': Object.values(themes).join(' ')
                },
                children: [{ type: 'text', value: 'Terminal' }]
              })

              preElement.properties['__withTitle__'] = true
            }
          }
        })
      },
      () => (tree) => {
        // vivit code block title
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) return

            const codeTitleElement = node.children.at(0)

            if (codeTitleElement.tagName !== 'figcaption') return
            codeTitleElement.properties['__rawString__'] = node.__rawString__

            codeTitleElement.properties['__rawString__'] = node.__rawString__

            if (codeTitleElement.properties['data-language']) {
              codeTitleElement.properties['__language__'] =
                codeTitleElement.properties['data-language']
            }
          }
        })
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
})
