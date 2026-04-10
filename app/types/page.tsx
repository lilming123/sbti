import Image from "next/image";
import Link from "next/link";
import { personalityTypes } from "@/lib/types";
import type { RankingEntry } from "@/lib/types";
import type { Metadata } from "next";
import { getSupabase } from "@/lib/supabase";
import { TypeCardShare } from "@/components/TypeCardShare";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "27 种 SBTI 人格类型总览 | 拿捏者、尤物、吗喽、小丑...",
  description: "浏览全部 27 种 SBTI 人格类型：CTRL 拿捏者、SEXY 尤物、MALO 吗喽、JOKE-R 小丑、ZZZZ 装死者等。每种人格都有专属插画、详细描述和十五维落点。",
  alternates: { canonical: "https://sbti.xiachat.com/types" },
  openGraph: {
    title: "27 种 SBTI 人格类型总览",
    description: "浏览全部 27 种 SBTI 人格类型，每种都有专属插画和详细描述。",
    url: "https://sbti.xiachat.com/types",
  },
};

const SITE_URL = "https://sbti.xiachat.com";

async function fetchRankings(): Promise<{ rankings: RankingEntry[]; total: number }> {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("sbti_rankings")
      .select("type_code");

    if (error || !data) return { rankings: [], total: 0 };

    const counts: Record<string, number> = {};
    for (const row of data) {
      counts[row.type_code] = (counts[row.type_code] ?? 0) + 1;
    }

    const rankings = Object.entries(counts)
      .map(([code, count]) => ({ code, count }))
      .sort((a, b) => b.count - a.count);

    return { rankings, total: data.length };
  } catch {
    return { rankings: [], total: 0 };
  }
}

function getRarityLabel(pct: number): { label: string; color: string } {
  if (pct <= 0) return { label: "未知", color: "bg-slate-100 text-slate-600" };
  if (pct < 1) return { label: "SSR", color: "bg-purple-100 text-purple-800" };
  if (pct < 3) return { label: "SR", color: "bg-amber-100 text-amber-800" };
  if (pct < 6) return { label: "R", color: "bg-blue-100 text-blue-800" };
  if (pct < 10) return { label: "N", color: "bg-emerald-100 text-emerald-800" };
  return { label: "C", color: "bg-slate-100 text-slate-600" };
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首页", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "人格类型", item: `${SITE_URL}/types` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "27 种 SBTI 人格类型",
  description: "全部 SBTI 人格测试结果类型列表",
  numberOfItems: personalityTypes.length,
  itemListElement: personalityTypes.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${t.cn} (${t.code})`,
    url: `${SITE_URL}/result/${t.slug}`,
    image: `${SITE_URL}${t.image}`,
  })),
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "27 种 SBTI 人格类型总览",
  description: "浏览全部 27 种 SBTI 人格类型，每种都有专属插画和详细描述。",
  url: `${SITE_URL}/types`,
  isPartOf: { "@type": "WebSite", name: "SBTI 人格测试", url: SITE_URL },
};

export default async function TypesPage() {
  const { rankings, total } = await fetchRankings();

  // Build lookup: code -> { rank, count, pct }
  const rankMap = new Map<string, { rank: number; count: number; pct: number }>();
  rankings.forEach((r, i) => {
    rankMap.set(r.code, {
      rank: i + 1,
      count: r.count,
      pct: total > 0 ? (r.count / total) * 100 : 0,
    });
  });

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          27 种 SBTI 人格类型总览
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          这里收录了全部 SBTI
          结果类型。可以先快速浏览每一种人格，也可以直接进入测试页面，看看最后落到哪一种结果上。
        </p>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personalityTypes.map((t) => {
            const info = rankMap.get(t.code);
            const rank = info?.rank ?? null;
            const pct = info?.pct ?? 0;
            const count = info?.count ?? 0;
            const { label: rarityLabel, color: rarityColor } = getRarityLabel(pct);

            return (
              <div
                key={t.code}
                className="relative flex flex-col items-center rounded-[30px] border border-black/5 bg-white/88 px-6 py-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition hover:shadow-[0_18px_48px_rgba(15,23,42,0.10)]"
              >
                {/* Ranking badge (top-left) */}
                {rank !== null && (
                  <span className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-800">
                    #{rank}
                  </span>
                )}

                {/* Rarity badge (top-right) */}
                <span className={`absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${rarityColor}`}>
                  {rarityLabel}
                </span>

                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-2xl">
                  <Image
                    src={t.image}
                    alt={t.cn}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>

                <span className="mt-5 inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-widest text-emerald-800 uppercase">
                  {t.code}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {t.cn}
                </h2>

                <p className="mt-2 text-center text-sm leading-6 text-slate-600">
                  {t.intro}
                </p>

                {/* Rarity stats */}
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  {count > 0 ? (
                    <>
                      <span>{count} 人 · {pct.toFixed(1)}%</span>
                    </>
                  ) : (
                    <span>暂无数据</span>
                  )}
                </div>

                {/* Actions row */}
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/result/${t.slug}`}
                    className="text-sm font-medium text-emerald-700 transition hover:text-emerald-900"
                  >
                    查看详情 &rarr;
                  </Link>
                  <TypeCardShare
                    code={t.code}
                    cn={t.cn}
                    intro={t.intro}
                    slug={t.slug}
                    rank={rank}
                    rarity={rarityLabel}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/test"
            className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            开始测试
          </Link>
        </div>
      </section>
    </main>
  );
}
