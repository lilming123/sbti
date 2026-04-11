import { NextRequest, NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE, isValidLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

const HTML_LANG_MAP: Record<string, string> = {
  zh: "zh-CN",
  en: "en",
  ja: "ja",
  ko: "ko",
  "zh-TW": "zh-TW",
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public files, api, _next, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/llms.txt" ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a locale
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (isValidLocale(maybeLocale)) {
    // Already has locale prefix — if it's the default locale, redirect without prefix
    if (maybeLocale === DEFAULT_LOCALE) {
      const rest = segments.slice(2).join("/");
      return NextResponse.redirect(new URL(`/${rest}`, req.url));
    }
    // Non-default locale — pass through with headers
    const response = NextResponse.next();
    response.headers.set("x-locale", maybeLocale);
    response.headers.set("Content-Language", HTML_LANG_MAP[maybeLocale] ?? maybeLocale);
    return response;
  }

  // No locale prefix — this is the default locale (zh), rewrite to /zh/...
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("x-locale", DEFAULT_LOCALE);
  response.headers.set("Content-Language", HTML_LANG_MAP[DEFAULT_LOCALE]);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|images|sitemap\\.xml|robots\\.txt|llms\\.txt|favicon\\.ico|icon\\.svg).*)",
  ],
};
