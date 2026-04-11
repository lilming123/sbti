import type { MetadataRoute } from "next";
import { personalityTypes } from "@/lib/types";
import { LOCALES, DEFAULT_LOCALE, SITE_URL, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/test", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/types", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/rankings", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const resultPaths = personalityTypes.map((t) => ({
    path: `/result/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${SITE_URL}${t.image}`],
  }));

  const allPaths = [
    ...staticPaths.map((p) => ({ ...p, images: undefined })),
    ...resultPaths,
  ];

  const hreflangMap: Record<string, string> = {
    zh: "zh-CN",
    en: "en",
    ja: "ja",
    ko: "ko",
    "zh-TW": "zh-TW",
  };

  return allPaths.flatMap(({ path, changeFrequency, priority, images }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified: now,
      changeFrequency,
      priority: locale === DEFAULT_LOCALE ? priority : priority * 0.9,
      ...(images ? { images } : {}),
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((loc) => [
            hreflangMap[loc],
            `${SITE_URL}${localePath(loc, path)}`,
          ]),
        ),
      },
    })),
  );
}
