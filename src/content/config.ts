import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().optional(),
    live: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.date().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
