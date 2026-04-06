import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    image: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
