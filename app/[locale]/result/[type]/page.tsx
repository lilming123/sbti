import { notFound } from "next/navigation";
import { typeBySlug, personalityTypes } from "@/lib/types";
import { DIMENSION_CODES } from "@/lib/dimensions";
import type { Metadata } from "next";
import type { Level } from "@/lib/dimensions";
import { ResultContent } from "../../../result/[type]/ResultContent";
import {
  LOCALES,
  SITE_URL,
  getDictionary,
  localePath,
  generateAlternates,
  localeToOgLocale,
  type Locale,
  isValidLocale,
} from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    personalityTypes.map((t) => ({ locale, type: t.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}): Promise<Metadata> {
  const { locale, type: slug } = await params;
  if (!isValidLocale(locale)) return {};

  const t = typeBySlug[slug];
  if (!t) return { title: "Not Found" };

  const dict = await getDictionary(locale);
  const typeName = dict.typeNames[t.code]?.name ?? t.cn;
  const typeIntro = dict.typeNames[t.code]?.intro ?? t.intro;
  const resultPath = `/result/${slug}`;

  return {
    title: `${typeName} ${t.code} | RLTI`,
    description: typeIntro,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, resultPath)}`,
      languages: generateAlternates(resultPath),
    },
    openGraph: {
      title: `${typeName} ${t.code} | RLTI`,
      description: typeIntro,
      url: `${SITE_URL}${localePath(locale, resultPath)}`,
      locale: localeToOgLocale(locale),
      images: [{ url: `${SITE_URL}${t.image}`, width: 600, height: 600, alt: `${typeName} ${t.code}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${typeName} ${t.code} | RLTI`,
      description: typeIntro,
      images: [`${SITE_URL}${t.image}`],
    },
  };
}

function parsePattern(pattern: string): Level[] {
  return pattern.split("-").join("").split("") as Level[];
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type: slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const t = typeBySlug[slug];
  if (!t) notFound();

  const hasPattern = !!t.pattern;
  const levels = hasPattern ? parsePattern(t.pattern) : [];

  const otherTypes = personalityTypes.filter((o) => o.slug !== t.slug);
  const related = otherTypes.sort(() => Math.random() - 0.5).slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "RLTI", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Types",
        item: `${SITE_URL}${localePath(locale as Locale, "/types")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${t.cn} ${t.code}`,
        item: `${SITE_URL}${localePath(locale as Locale, `/result/${t.slug}`)}`,
      },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${t.cn} (${t.code}) — RLTI`,
    description: t.intro,
    image: `${SITE_URL}${t.image}`,
    url: `${SITE_URL}${localePath(locale as Locale, `/result/${t.slug}`)}`,
    publisher: { "@type": "Organization", name: "RLTI", url: SITE_URL },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${localePath(locale as Locale, `/result/${t.slug}`)}`,
    },
  };

  const dimensionData = hasPattern
    ? DIMENSION_CODES.map((dimCode, idx) => ({
        dimCode,
        level: levels[idx] as Level,
      }))
    : [];

  const relatedData = related.map((r) => ({
    slug: r.slug,
    code: r.code,
    cn: r.cn,
    intro: r.intro,
    image: r.image,
  }));

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <ResultContent
        code={t.code}
        cn={t.cn}
        intro={t.intro}
        desc={t.desc}
        slug={t.slug}
        image={t.image}
        hasPattern={hasPattern}
        dimensions={dimensionData}
        related={relatedData}
      />
    </main>
  );
}
