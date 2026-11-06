import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/servicos"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/analises"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/sobre-nos"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
