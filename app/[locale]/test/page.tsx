import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuizFlow } from "@/components/QuizFlow";
import { TestPageContent } from "../../test/TestPageContent";
import {
  LOCALES,
  SITE_URL,
  getDictionary,
  localePath,
  generateAlternates,
  localeToOgLocale,
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
    title: dict.test.h1,
    description: dict.test.desc,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, "/test")}`,
      languages: generateAlternates("/test"),
    },
    openGraph: {
      title: dict.test.h1,
      description: dict.test.desc,
      url: `${SITE_URL}${localePath(locale, "/test")}`,
      locale: localeToOgLocale(locale),
    },
  };
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16 sm:px-6">
      <TestPageContent />
      <QuizFlow />
    </main>
  );
}
