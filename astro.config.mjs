import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkLinkCard from "remark-link-card";
import { createOGImage } from "./src/integrations/ogimage";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://futabooo.com",
  redirects: {
    "/blog/software-estimation/": "/blog/2023/software-estimation/",
  },
  markdown: {
    remarkPlugins: [remarkLinkCard],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    createOGImage({
      config: {
        path: "blog/",
      },
    }),
    react(),
  ],
});
