import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: false,
    },
  },
});
