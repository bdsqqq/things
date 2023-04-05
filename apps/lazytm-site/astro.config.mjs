import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: false,
    },
  },
  integrations: [tailwind()],
});
