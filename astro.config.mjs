import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { createOGImage } from "./src/integrations/ogimage";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), createOGImage({
    config: {
      path: "blog/"
    }
  }), react()]
});