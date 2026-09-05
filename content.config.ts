import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  category: z.enum(['vuejs', 'nuxt', 'devops', 'freelance', 'divers']),
  tags: z.array(z.string()).default([]),
  readTime: z.number().optional(),
  draft: z.boolean().default(false),
  image: z.string().optional()
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: blogSchema
    }),
    blogEn: defineCollection({
      source: 'blog-en/*.md',
      type: 'page',
      schema: blogSchema
    })
  }
})
