"use client";

import { useCallback, useState } from "react";

const SITE_URL = "https://sbti.xiachat.com";

interface TypeCardShareProps {
  code: string;
  cn: string;
  intro: string;
  slug: string;
  rank: number | null;
  rarity: string;
}

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export function TypeCardShare({ code, cn, intro, slug, rank, rarity }: TypeCardShareProps) {
  const [copied, setCopied] = useState(false);

  const resultUrl = `${SITE_URL}/result/${slug}`;

  const handleShare = useCallback(async () => {
    const rankText = rank ? `排行第 ${rank} 名` : "暂无排名";
    const shareText = `【${cn}】${code} — ${intro}\n${rankText} · 稀有度：${rarity}\n\n来测测你是什么 SBTI 人格 👉 ${resultUrl}\n\n#SBTI人格测试 #人格测试`;

    // Try Web Share API first (mobile friendly)
    if (navigator.share) {
      try {
        await navigator.share({ title: `SBTI 人格：${cn} (${code})`, text: shareText, url: resultUrl });
        return;
      } catch {
        // User cancelled or API failed, fall through to clipboard
      }
    }

    // Fallback: copy to clipboard
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code, cn, intro, slug, rank, rarity, resultUrl]);

  return (
    <button
      onClick={(e: { preventDefault: () => void; stopPropagation: () => void }) => {
        e.preventDefault();
        e.stopPropagation();
        handleShare();
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
      title="分享此人格"
    >
      <ShareIcon />
      {copied ? "已复制" : "分享"}
    </button>
  );
}
