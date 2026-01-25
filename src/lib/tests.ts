import { Test, TestSummary } from "@/types/test";
import sampleMbti from "@/data/tests/sample-mbti.json";
import dogPersonality from "@/data/tests/dog-personality.json";
import loveStyle from "@/data/tests/love-style.json";
import workStyle from "@/data/tests/work-style.json";
import travelStyle from "@/data/tests/travel-style.json";
import foodStyle from "@/data/tests/food-style.json";
import stressStyle from "@/data/tests/stress-style.json";
import communicationStyle from "@/data/tests/communication-style.json";
import attachmentStyle from "@/data/tests/attachment-style.json";
import loveLanguage from "@/data/tests/love-language.json";
import burnoutRisk from "@/data/tests/burnout-risk.json";
import hiddenTalent from "@/data/tests/hidden-talent.json";
import selfEsteem from "@/data/tests/self-esteem.json";
import innerAnimal from "@/data/tests/inner-animal.json";
import trueSelf from "@/data/tests/true-self.json";
import emotionExpression from "@/data/tests/emotion-expression.json";

const tests: Test[] = [
  sampleMbti as unknown as Test,
  dogPersonality as unknown as Test,
  loveStyle as unknown as Test,
  workStyle as unknown as Test,
  travelStyle as unknown as Test,
  foodStyle as unknown as Test,
  stressStyle as unknown as Test,
  communicationStyle as unknown as Test,
  attachmentStyle as unknown as Test,
  loveLanguage as unknown as Test,
  burnoutRisk as unknown as Test,
  hiddenTalent as unknown as Test,
  selfEsteem as unknown as Test,
  innerAnimal as unknown as Test,
  trueSelf as unknown as Test,
  emotionExpression as unknown as Test,
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
  "attachment-style": "🔗",
  "love-language": "💝",
  "burnout-risk": "🔥",
  "hidden-talent": "✨",
  "self-esteem": "💪",
  "inner-animal": "🦁",
  "true-self": "🎭",
  "emotion-expression": "🎨",
};

// 테스트 카테고리 정의
export type TestCategory = "personality" | "relationship" | "work" | "lifestyle" | "fun";

export interface CategoryInfo {
  id: TestCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  { id: "personality", name: "성격/자아", description: "나의 내면을 탐구해요", icon: "🧠", color: "#6366f1" },
  { id: "relationship", name: "연애/관계", description: "사랑과 관계의 비밀", icon: "💕", color: "#E91E63" },
  { id: "work", name: "직장/스트레스", description: "일과 마음 건강", icon: "💼", color: "#8B5CF6" },
  { id: "lifestyle", name: "라이프스타일", description: "나만의 취향 발견", icon: "✈️", color: "#10B981" },
  { id: "fun", name: "재미", description: "가볍게 즐기는 테스트", icon: "🎉", color: "#F59E0B" },
];

// 테스트별 카테고리 매핑
const testCategories: Record<string, TestCategory> = {
  "sample-mbti": "personality",
  "true-self": "personality",
  "self-esteem": "personality",
  "hidden-talent": "personality",
  "love-style": "relationship",
  "attachment-style": "relationship",
  "love-language": "relationship",
  "communication-style": "relationship",
  "work-style": "work",
  "burnout-risk": "work",
  "stress-style": "work",
  "travel-style": "lifestyle",
  "food-style": "lifestyle",
  "dog-personality": "fun",
  "inner-animal": "fun",
  "emotion-expression": "fun",
};

// 인기 테스트 목록 (HOT 뱃지 표시)
const popularTests: string[] = [
  "sample-mbti",
  "love-style",
  "dog-personality",
  "attachment-style",
  "inner-animal",
];

export function getAllTests(): TestSummary[] {
  return tests.map((test) => ({
    id: test.id,
    title: test.title,
    description: test.description,
    thumbnail: test.thumbnail,
    color: test.color,
    emoji: testEmojis[test.id] || "🎯",
    questionCount: test.questions.length,
    category: testCategories[test.id],
    isPopular: popularTests.includes(test.id),
  }));
}

export function getTestsByCategory(category: TestCategory): TestSummary[] {
  return getAllTests().filter((test) => test.category === category);
}

export function getPopularTests(): TestSummary[] {
  return getAllTests().filter((test) => test.isPopular);
}

export function getCategoryInfo(category: TestCategory): CategoryInfo | undefined {
  return categories.find((c) => c.id === category);
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
    category: testCategories[test.id],
    isPopular: popularTests.includes(test.id),
  };
}

// Test 객체에서 이모지를 가져오는 헬퍼 함수
export function getTestEmoji(testId: string): string {
  return testEmojis[testId] || "🎯";
}

// 관련 테스트 추천 (같은 카테고리 또는 인기 테스트)
export function getRelatedTests(currentTestId: string, limit: number = 3): TestSummary[] {
  const currentTest = getTestById(currentTestId);
  if (!currentTest) return getPopularTests().slice(0, limit);

  const currentCategory = testCategories[currentTestId];
  const allTests = getAllTests();

  // 같은 카테고리의 다른 테스트 우선
  const sameCategoryTests = allTests.filter(
    (test) => test.id !== currentTestId && test.category === currentCategory
  );

  // 다른 카테고리의 인기 테스트
  const otherPopularTests = allTests.filter(
    (test) => test.id !== currentTestId &&
              test.category !== currentCategory &&
              test.isPopular
  );

  // 같은 카테고리 + 다른 카테고리 인기 테스트 순으로 조합
  const recommendations = [...sameCategoryTests, ...otherPopularTests];

  return recommendations.slice(0, limit);
}

// 테스트 완료 후 다음 추천 테스트
export function getNextRecommendedTest(completedTestId: string): TestSummary | undefined {
  const recommendations = getRelatedTests(completedTestId, 1);
  return recommendations[0];
}
