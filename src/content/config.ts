import { defineCollection, z } from 'astro:content'

const markdownCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string().optional(),
    publishDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    author: z.string().default('syen').optional(),
    tags: z.array(z.string()).optional()
  })
})

// This key should match your collection directory name in "src/content"
export const collections = {
  markdown: markdownCollection
}
