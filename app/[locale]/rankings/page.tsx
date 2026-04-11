import { typeByCode } from "@/lib/types";
import type { RankingEntry } from "@/lib/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { RankingsContent } from "../../rankings/RankingsContent";
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

export const revalidate = 60;

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
    title: dict.rankings.h1,
    description: dict.rankings.desc,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, "/rankings")}`,
      languages: generateAlternates("/rankings"),
    },
    openGraph: {
      title: dict.rankings.h1,
      description: dict.rankings.desc,
      url: `${SITE_URL}${localePath(locale, "/rankings")}`,
      locale: localeToOgLocale(locale),
    },
  };
}

async function fetchRankings(): Promise<{ rankings: RankingEntry[]; total: number }> {
  const supabase = getSupabase();
  const allData: { type_code: string }[] = [];
  const pageSize = 1000;
  let from = 0;

  while (true) {
    const { data, error } = await supabase
      .from("sbti_rankings")
      .select("type_code")
      .range(from, from + pageSize - 1);
    if (error || !data || data.length === 0) break;
    allData.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }

  const counts: Record<string, number> = {};
  for (const row of allData) {
    counts[row.type_code] = (counts[row.type_code] ?? 0) + 1;
  }
  const rankings = Object.entries(counts)
    .map(([code, count]) => ({ code, count }))
    .sort((a, b) => b.count - a.count);
  return { rankings, total: allData.length };
}

export default async function RankingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { rankings, total } = await fetchRankings();

  const enriched = rankings.map((item) => {
    const t = typeByCode[item.code];
    return {
      code: item.code,
      count: item.count,
      cn: t?.cn ?? item.code,
      slug: t?.slug ?? "",
    };
  });

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const timeStr = now.toTimeString().slice(0, 5);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SBTI", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rankings",
        item: `${SITE_URL}${localePath(locale as Locale, "/rankings")}`,
      },
    ],
  };

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <RankingsContent
        rankings={enriched}
        total={total}
        dateStr={dateStr}
        timeStr={timeStr}
      />
    </main>
  );
}
