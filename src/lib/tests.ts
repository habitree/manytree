import { Test, TestSummary } from "@/types/test";
import sampleMbti from "@/data/tests/sample-mbti.json";
import dogPersonality from "@/data/tests/dog-personality.json";
import loveStyle from "@/data/tests/love-style.json";
import workStyle from "@/data/tests/work-style.json";
import travelStyle from "@/data/tests/travel-style.json";
import foodStyle from "@/data/tests/food-style.json";
import stressStyle from "@/data/tests/stress-style.json";
import communicationStyle from "@/data/tests/communication-style.json";

const tests: Test[] = [
  sampleMbti as unknown as Test,
  dogPersonality as unknown as Test,
  loveStyle as unknown as Test,
  workStyle as unknown as Test,
  travelStyle as unknown as Test,
  foodStyle as unknown as Test,
  stressStyle as unknown as Test,
  communicationStyle as unknown as Test,
];

// 각 테스트에 맞는 이모지 매핑
const testEmojis: Record<string, string> = {
  "sample-mbti": "🧠",
  "dog-personality": "🐕",
  "love-style": "💕",
  "work-style": "💼",
  "travel-style": "✈️",
  "food-style": "🍽️",
  "stress-style": "🧘",
  "communication-style": "💬",
};

export function getAllTests(): TestSummary[] {
  return tests.map((test) => ({
    id: test.id,
    title: test.title,
    description: test.description,
    thumbnail: test.thumbnail,
    color: test.color,
    emoji: testEmojis[test.id] || "🎯",
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
    emoji: testEmojis[test.id] || "🎯",
    questionCount: test.questions.length,
  };
}

// Test 객체에서 이모지를 가져오는 헬퍼 함수
export function getTestEmoji(testId: string): string {
  return testEmojis[testId] || "🎯";
}
