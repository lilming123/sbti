import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutContent } from "../../about/AboutContent";
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
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    title: dict.about.h1,
    description: dict.about.desc,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, "/about")}`,
      languages: generateAlternates("/about"),
    },
    openGraph: {
      title: dict.about.h1,
      description: dict.about.desc,
      url: `${SITE_URL}${localePath(locale, "/about")}`,
      locale: localeToOgLocale(locale),
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "RLTI", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}${localePath(locale as Locale, "/about")}`,
      },
    ],
  };

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About RLTI",
    url: `${SITE_URL}${localePath(locale as Locale, "/about")}`,
    isPartOf: { "@type": "WebSite", name: "RLTI", url: SITE_URL },
  };

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <AboutContent />
    </main>
  );
}
