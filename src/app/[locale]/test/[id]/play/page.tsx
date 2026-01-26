import { getAllTests } from "@/lib/tests";
import { setRequestLocale } from "next-intl/server";
import TestPlayClient from "@/components/TestPlayClient";
import { locales } from "@/i18n/config";

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  const tests = getAllTests();
  return locales.flatMap((locale) =>
    tests.map((test) => ({ locale, id: test.id }))
  );
}

export default async function TestPlayPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  return <TestPlayClient testId={id} />;
}
