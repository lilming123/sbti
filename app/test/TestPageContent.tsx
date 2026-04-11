"use client";

import { useDictionary } from "@/components/DictionaryProvider";

export function TestPageContent() {
  const { t } = useDictionary();

  return (
    <div className="mb-10 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
        {t("test.title")}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
        {t("test.desc")}
      </p>
    </div>
  );
}
