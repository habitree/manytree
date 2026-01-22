"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  const [test, setTest] = useState<Test | undefined>(undefined);
  const [result, setResult] = useState<Result | undefined>(undefined);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedTest = getTestById(testId);
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
  }, [testId, router]);

  if (isLoading || !test || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-500">결과를 분석하고 있어요...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-xl mx-auto">
        <ResultCard result={result} scores={scores} color={test.color} />

        {/* 결과 아래 광고 */}
        <AdBanner format="auto" className="my-8" />

        <div className="mt-8">
          <ShareButtons
            title={`${test.title} 결과: ${result.title}`}
            description={result.description.slice(0, 100) + "..."}
          />
        </div>

        <div className="mt-8 space-y-3">
          <Link href={`/test/${test.id}/`}>
            <button
              className="w-full py-4 rounded-xl text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: test.color }}
            >
              다시 테스트하기
            </button>
          </Link>

          <Link href="/">
            <button className="w-full py-4 rounded-xl bg-gray-100 text-gray-600 font-bold transition-colors hover:bg-gray-200">
              다른 테스트 보기
            </button>
          </Link>
        </div>

        {/* 하단 광고 */}
        <AdBanner format="horizontal" className="mt-8" />
      </div>
    </div>
  );
}
