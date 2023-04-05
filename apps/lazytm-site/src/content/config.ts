import { defineCollection } from "astro:content";

const snippetsCollection = defineCollection({});
export const collections = {
  codesnippets: snippetsCollection,
};
