"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { LocaleLink } from "./LocaleLink";
import { useTheme } from "./Providers";
import { useDictionary, buildLocalePath } from "./DictionaryProvider";
import { LOCALE_INFO } from "@/lib/i18n";

const SunIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
  </svg>
);

export function Header() {
  const { resolved, setTheme } = useTheme();
  const { locale, t } = useDictionary();
  const router = useRouter();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-[rgba(247,244,237,0.82)] dark:bg-[rgba(15,20,25,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <LocaleLink href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-emerald-900/12 dark:border-emerald-400/20 bg-white dark:bg-dark-card shadow-[0_12px_30px_rgba(15,118,110,0.12)]">
            <Logo />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.18rem] tracking-[0.18em] text-slate-950 dark:text-slate-50 uppercase font-semibold">RLTI</span>
            <span className="mt-1 text-[0.63rem] font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400 uppercase">{t("nav.subtitle")}</span>
          </span>
        </LocaleLink>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 md:flex">
          <LocaleLink className="transition hover:text-slate-950 dark:hover:text-white" href="/types">{t("nav.types")}</LocaleLink>
          <LocaleLink className="transition hover:text-slate-950 dark:hover:text-white" href="/rankings">{t("nav.rankings")}</LocaleLink>
          <LocaleLink className="transition hover:text-slate-950 dark:hover:text-white" href="/about">{t("nav.about")}</LocaleLink>
          <LocaleLink className="transition hover:text-slate-950 dark:hover:text-white" href="/test">{t("nav.startTest")}</LocaleLink>
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/10 text-slate-600 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-white/20"
            title={resolved === "dark" ? t("theme.light") : t("theme.dark")}
          >
            {resolved === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex h-9 items-center gap-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/10 px-3 text-sm text-slate-600 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-white/20"
            >
              <GlobeIcon />
              <span className="hidden sm:inline">{LOCALE_INFO.find((l) => l.code === locale)?.label ?? "中文"}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-dark-card shadow-xl py-2 z-50">
                {LOCALE_INFO.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      router.push(buildLocalePath(l.code, pathname));
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2 text-sm transition hover:bg-slate-50 dark:hover:bg-white/10 ${
                      locale === l.code ? "text-emerald-700 dark:text-emerald-400 font-semibold" : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <LocaleLink
            href="/test"
            className="inline-flex items-center rounded-full bg-emerald-900 dark:bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800 dark:hover:bg-emerald-600"
          >
            {t("nav.startTest")}
          </LocaleLink>
        </div>
      </div>
    </header>
  );
}
