import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * /demo, /team and /updatedCTM already send noindex headers, but a crawler has
 * to fetch a page to see those. Disallowing them here keeps the unlisted demo
 * flows out of crawl paths entirely.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demo/", "/team", "/updatedCTM", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
