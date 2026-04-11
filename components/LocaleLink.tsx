"use client";

import Link from "next/link";
import { type ComponentProps } from "react";
import { useDictionary } from "./DictionaryProvider";
import { localePath } from "@/lib/i18n";

type LinkProps = ComponentProps<typeof Link>;

/**
 * A locale-aware Link that automatically prepends the current locale prefix
 * to internal paths. External URLs (http/https/mailto) are passed through unchanged.
 */
export function LocaleLink({ href, ...props }: LinkProps) {
  const { locale } = useDictionary();

  if (typeof href === "string" && href.startsWith("/")) {
    return <Link href={localePath(locale, href)} {...props} />;
  }

  // UrlObject or external URL — pass through
  return <Link href={href} {...props} />;
}
