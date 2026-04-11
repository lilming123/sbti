"use client";

import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale, DEFAULT_LOCALE, LOCALES, localePath } from "@/lib/i18n";

interface DictCtx {
  locale: Locale;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const DictContext = createContext<DictCtx>({
  locale: DEFAULT_LOCALE,
  t: (key) => key,
});

export function useDictionary() {
  return useContext(DictContext);
}

/** Strip locale prefix from a pathname (e.g. "/en/test" → "/test", "/test" → "/test") */
export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (
    (LOCALES as readonly string[]).includes(maybeLocale) &&
    maybeLocale !== DEFAULT_LOCALE
  ) {
    const rest = segments.slice(2).join("/");
    return `/${rest}` || "/";
  }
  return pathname;
}

/** Build a locale-aware path for switching languages */
export function buildLocalePath(
  locale: Locale,
  pathname: string,
): string {
  const pathWithoutLocale = stripLocalePrefix(pathname);
  return localePath(locale, pathWithoutLocale);
}

export function DictionaryProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Record<string, string>;
  children: ReactNode;
}) {
  const t = useCallback(
    (key: string, replacements?: Record<string, string | number>) => {
      let text = messages[key] ?? key;
      if (replacements) {
        for (const [k, v] of Object.entries(replacements)) {
          text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return text;
    },
    [messages],
  );

  return (
    <DictContext.Provider value={{ locale, t }}>{children}</DictContext.Provider>
  );
}
