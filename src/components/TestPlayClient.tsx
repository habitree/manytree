"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getTestById } from "@/lib/tests";
import { UserAnswer } from "@/types/test";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

interface Props {
  testId: string;
}

export default function TestPlayClient({ testId }: Props) {
  const router = useRouter();
  const [test, setTest] = useState<ReturnType<typeof getTestById>>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedTest = getTestById(testId);
    if (!loadedTest) {
      router.push("/");
      return;
    }
    setTest(loadedTest);
    setIsLoading(false);
  }, [testId, router]);

  const handleSelectOption = (optionIndex: number) => {
    if (!test) return;

    const currentQuestion = test.questions[currentIndex];
    const selectedOption = currentQuestion.options[optionIndex];

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      scores: selectedOption.scores,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      localStorage.setItem(
        `test-result-${test.id}`,
        JSON.stringify({
          testId: test.id,
          answers: newAnswers,
          completedAt: new Date().toISOString(),
        })
      );
      router.push(`/test/${test.id}/result/`);
    }
  };

  if (isLoading || !test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-500">로딩 중...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = test.questions[currentIndex];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <ProgressBar
            current={currentIndex + 1}
            total={test.questions.length}
            color={test.color}
          />
        </div>

        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={test.questions.length}
          onSelect={handleSelectOption}
          color={test.color}
        />

        {currentIndex > 0 && (
          <button
            onClick={() => {
              setCurrentIndex((prev) => prev - 1);
              setAnswers((prev) => prev.slice(0, -1));
            }}
            className="mt-8 text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1 mx-auto"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
            이전 질문으로
          </button>
        )}
      </div>
    </div>
  );
}
