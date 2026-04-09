import type { MetadataRoute } from "next";
import { personalityTypes } from "@/lib/types";

const SITE_URL = "https://sbti.xiachat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/test`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/types`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/rankings`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const resultPages: MetadataRoute.Sitemap = personalityTypes.map((t) => ({
    url: `${SITE_URL}/result/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...resultPages];
}
