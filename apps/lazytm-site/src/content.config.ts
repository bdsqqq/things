import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const snippetsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/codesnippets" }),
});

export const collections = {
  codesnippets: snippetsCollection,
};
