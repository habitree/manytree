"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { getTestById } from "@/lib/tests";
import { determineResult, calculateScores } from "@/lib/calculate";
import { UserAnswer, Result, Test } from "@/types/test";
import ResultCard from "@/components/ResultCard";
import ShareButtons from "@/components/ShareButtons";
import AdBanner from "@/components/AdBanner";

interface Props {
  testId: string;
}

interface StoredResult {
  testId: string;
  answers: UserAnswer[];
  completedAt: string;
}

export default function TestResultClient({ testId }: Props) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("result");
  const [test, setTest] = useState<Test | undefined>(undefined);
  const [result, setResult] = useState<Result | undefined>(undefined);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedTest = getTestById(testId, locale);
    if (!loadedTest) {
      router.push("/");
      return;
    }
    setTest(loadedTest);

    const storedData = localStorage.getItem(`test-result-${testId}`);
    if (!storedData) {
      router.push(`/test/${testId}/`);
      return;
    }

    const parsed: StoredResult = JSON.parse(storedData);
    const calculatedScores = calculateScores(parsed.answers);
    const determinedResult = determineResult(loadedTest, parsed.answers);

    setScores(calculatedScores);
    setResult(determinedResult);
    setIsLoading(false);
  }, [testId, locale, router]);

  if (isLoading || !test || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-500">Analyzing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <ResultCard result={result} scores={scores} color={test.color} testId={testId} />

        {/* 결과 아래 광고 */}
        <AdBanner format="auto" className="my-8 md:my-12" />

        <div className="mt-8 md:mt-12 bg-white p-6 md:p-8 rounded-3xl shadow-card">
          <ShareButtons
            title={`${test.title} 결과: ${result.title}`}
            description={result.description.slice(0, 100) + "..."}
          />
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href={`/test/${test.id}/`} className="w-full">
            <button
              className="w-full py-4 md:py-5 rounded-2xl text-white font-bold text-lg md:text-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
              style={{ backgroundColor: test.color }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {t("retry")}
            </button>
          </Link>

          <Link href="/" className="w-full">
            <button className="w-full py-4 md:py-5 rounded-2xl bg-soft-beige text-deep-charcoal font-bold text-lg md:text-xl transition-all duration-300 hover:bg-warm-wood-100 border-2 border-warm-wood-100 shadow-sm flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {t("otherTests")}
            </button>
          </Link>
        </div>

        {/* 하단 광고 */}
        <AdBanner format="horizontal" className="mt-8 md:mt-12" />
      </div>
    </div>
  );
}
