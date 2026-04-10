import type { MetadataRoute } from "next";
import { personalityTypes } from "@/lib/types";

const SITE_URL = "https://sbti.xiachat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${SITE_URL}/images/types/ctrl.png`],
    },
    {
      url: `${SITE_URL}/test`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/types`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: personalityTypes.map((t) => `${SITE_URL}${t.image}`),
    },
    {
      url: `${SITE_URL}/rankings`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const resultPages: MetadataRoute.Sitemap = personalityTypes.map((t) => ({
    url: `${SITE_URL}/result/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${SITE_URL}${t.image}`],
  }));

  return [...staticPages, ...resultPages];
}
