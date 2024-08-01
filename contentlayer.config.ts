import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode, { LineElement } from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { visit } from 'unist-util-visit'
import { UnistNode } from '@/types/unist'

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
          // console.log(node)
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children

            if (codeEl.tagName !== 'code') return

            // console.log(codeEl.children?.[0].value)

            node.__rawString__ = codeEl.children?.[0].value
            node.__src__ = node.properties?.__src__
            node.__style__ = node.properties?.__style__
          }
        })
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: 'github-dark-default'
        }
      ],

      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) return

            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') return

            preElement.properties['__withMeta__'] =
              node.children.at(0).tagName === 'figcaption'

            preElement.properties['__rawString__'] = node.__rawString__

            if (node.__src__) preElement.properties['__src__'] = node.__src__

            if (node.__style__)
              preElement.properties['__style__'] = node.__style__

            console.log(preElement)
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
