import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://example.com";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
