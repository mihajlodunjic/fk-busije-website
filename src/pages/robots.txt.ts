import type { APIRoute } from "astro";
import { getSiteUrl } from "@/utils/seo";

export const prerender = true;

export const GET: APIRoute = () => {
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap-index.xml\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
