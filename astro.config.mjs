import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { createOGImage } from "./src/integrations/ogimage";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://futabooo.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
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
  experimental: {
    assets: true,
  },
});
