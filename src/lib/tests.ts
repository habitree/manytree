import { Test, TestSummary } from "@/types/test";
import sampleMbti from "@/data/tests/sample-mbti.json";
import dogPersonality from "@/data/tests/dog-personality.json";

const tests: Test[] = [sampleMbti as Test, dogPersonality as Test];

export function getAllTests(): TestSummary[] {
  return tests.map((test) => ({
    id: test.id,
    title: test.title,
    description: test.description,
    thumbnail: test.thumbnail,
    color: test.color,
    questionCount: test.questions.length,
  }));
}

export function getTestById(id: string): Test | undefined {
  return tests.find((test) => test.id === id);
}

export function getTestSummaryById(id: string): TestSummary | undefined {
  const test = getTestById(id);
  if (!test) return undefined;

  return {
    id: test.id,
    title: test.title,
    description: test.description,
    thumbnail: test.thumbnail,
    color: test.color,
    questionCount: test.questions.length,
  };
}
