import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexableEnvironment } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableEnvironment) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
