import { defineCollection } from 'astro:content';

const projectCollection = defineCollection({});
const blogCollection = defineCollection({});

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
