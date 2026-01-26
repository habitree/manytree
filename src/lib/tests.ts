import { Test, TestSummary } from "@/types/test";

// 한국어 (기본)
import sampleMbtiKo from "@/data/tests/ko/sample-mbti.json";
import dogPersonalityKo from "@/data/tests/ko/dog-personality.json";
import loveStyleKo from "@/data/tests/ko/love-style.json";
import workStyleKo from "@/data/tests/ko/work-style.json";
import travelStyleKo from "@/data/tests/ko/travel-style.json";
import foodStyleKo from "@/data/tests/ko/food-style.json";
import stressStyleKo from "@/data/tests/ko/stress-style.json";
import communicationStyleKo from "@/data/tests/ko/communication-style.json";
import attachmentStyleKo from "@/data/tests/ko/attachment-style.json";
import loveLanguageKo from "@/data/tests/ko/love-language.json";
import burnoutRiskKo from "@/data/tests/ko/burnout-risk.json";
import hiddenTalentKo from "@/data/tests/ko/hidden-talent.json";
import selfEsteemKo from "@/data/tests/ko/self-esteem.json";
import innerAnimalKo from "@/data/tests/ko/inner-animal.json";
import trueSelfKo from "@/data/tests/ko/true-self.json";
import emotionExpressionKo from "@/data/tests/ko/emotion-expression.json";

// 영어
import sampleMbtiEn from "@/data/tests/en/sample-mbti.json";
import dogPersonalityEn from "@/data/tests/en/dog-personality.json";
import loveStyleEn from "@/data/tests/en/love-style.json";
import attachmentStyleEn from "@/data/tests/en/attachment-style.json";
import innerAnimalEn from "@/data/tests/en/inner-animal.json";

// 일본어
import sampleMbtiJa from "@/data/tests/ja/sample-mbti.json";
import dogPersonalityJa from "@/data/tests/ja/dog-personality.json";
import loveStyleJa from "@/data/tests/ja/love-style.json";
import attachmentStyleJa from "@/data/tests/ja/attachment-style.json";
import innerAnimalJa from "@/data/tests/ja/inner-animal.json";

// 중국어 간체
import sampleMbtiZhCN from "@/data/tests/zh-CN/sample-mbti.json";
import dogPersonalityZhCN from "@/data/tests/zh-CN/dog-personality.json";
import loveStyleZhCN from "@/data/tests/zh-CN/love-style.json";
import attachmentStyleZhCN from "@/data/tests/zh-CN/attachment-style.json";
import innerAnimalZhCN from "@/data/tests/zh-CN/inner-animal.json";

// 중국어 번체
import sampleMbtiZhTW from "@/data/tests/zh-TW/sample-mbti.json";
import dogPersonalityZhTW from "@/data/tests/zh-TW/dog-personality.json";
import loveStyleZhTW from "@/data/tests/zh-TW/love-style.json";
import attachmentStyleZhTW from "@/data/tests/zh-TW/attachment-style.json";
import innerAnimalZhTW from "@/data/tests/zh-TW/inner-animal.json";

// 스페인어
import sampleMbtiEs from "@/data/tests/es/sample-mbti.json";
import dogPersonalityEs from "@/data/tests/es/dog-personality.json";
import loveStyleEs from "@/data/tests/es/love-style.json";
import attachmentStyleEs from "@/data/tests/es/attachment-style.json";
import innerAnimalEs from "@/data/tests/es/inner-animal.json";

// 로케일별 테스트 데이터 맵
type LocaleTestMap = Record<string, Test>;

const testsByLocale: Record<string, LocaleTestMap> = {
  ko: {
    "sample-mbti": sampleMbtiKo as unknown as Test,
    "dog-personality": dogPersonalityKo as unknown as Test,
    "love-style": loveStyleKo as unknown as Test,
    "work-style": workStyleKo as unknown as Test,
    "travel-style": travelStyleKo as unknown as Test,
    "food-style": foodStyleKo as unknown as Test,
    "stress-style": stressStyleKo as unknown as Test,
    "communication-style": communicationStyleKo as unknown as Test,
    "attachment-style": attachmentStyleKo as unknown as Test,
    "love-language": loveLanguageKo as unknown as Test,
    "burnout-risk": burnoutRiskKo as unknown as Test,
    "hidden-talent": hiddenTalentKo as unknown as Test,
    "self-esteem": selfEsteemKo as unknown as Test,
    "inner-animal": innerAnimalKo as unknown as Test,
    "true-self": trueSelfKo as unknown as Test,
    "emotion-expression": emotionExpressionKo as unknown as Test,
  },
  en: {
    "sample-mbti": sampleMbtiEn as unknown as Test,
    "dog-personality": dogPersonalityEn as unknown as Test,
    "love-style": loveStyleEn as unknown as Test,
    "attachment-style": attachmentStyleEn as unknown as Test,
    "inner-animal": innerAnimalEn as unknown as Test,
  },
  ja: {
    "sample-mbti": sampleMbtiJa as unknown as Test,
    "dog-personality": dogPersonalityJa as unknown as Test,
    "love-style": loveStyleJa as unknown as Test,
    "attachment-style": attachmentStyleJa as unknown as Test,
    "inner-animal": innerAnimalJa as unknown as Test,
  },
  "zh-CN": {
    "sample-mbti": sampleMbtiZhCN as unknown as Test,
    "dog-personality": dogPersonalityZhCN as unknown as Test,
    "love-style": loveStyleZhCN as unknown as Test,
    "attachment-style": attachmentStyleZhCN as unknown as Test,
    "inner-animal": innerAnimalZhCN as unknown as Test,
  },
  "zh-TW": {
    "sample-mbti": sampleMbtiZhTW as unknown as Test,
    "dog-personality": dogPersonalityZhTW as unknown as Test,
    "love-style": loveStyleZhTW as unknown as Test,
    "attachment-style": attachmentStyleZhTW as unknown as Test,
    "inner-animal": innerAnimalZhTW as unknown as Test,
  },
  es: {
    "sample-mbti": sampleMbtiEs as unknown as Test,
    "dog-personality": dogPersonalityEs as unknown as Test,
    "love-style": loveStyleEs as unknown as Test,
    "attachment-style": attachmentStyleEs as unknown as Test,
    "inner-animal": innerAnimalEs as unknown as Test,
  },
};

// 기본 테스트 목록 (한국어 기준)
const defaultTests = Object.values(testsByLocale.ko);

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

// 로케일에 맞는 테스트 데이터 가져오기 (없으면 한국어 fallback)
function getLocalizedTest(id: string, locale: string = "ko"): Test | undefined {
  // 해당 로케일에 번역이 있으면 사용
  if (testsByLocale[locale]?.[id]) {
    return testsByLocale[locale][id];
  }
  // 없으면 한국어로 fallback
  return testsByLocale.ko[id];
}

export function getAllTests(locale: string = "ko"): TestSummary[] {
  return defaultTests.map((test) => {
    const localizedTest = getLocalizedTest(test.id, locale) || test;
    return {
      id: localizedTest.id,
      title: localizedTest.title,
      description: localizedTest.description,
      thumbnail: localizedTest.thumbnail,
      color: localizedTest.color,
      emoji: testEmojis[localizedTest.id] || "🎯",
      questionCount: localizedTest.questions.length,
      category: testCategories[localizedTest.id],
      isPopular: popularTests.includes(localizedTest.id),
    };
  });
}

export function getTestsByCategory(category: TestCategory, locale: string = "ko"): TestSummary[] {
  return getAllTests(locale).filter((test) => test.category === category);
}

export function getPopularTests(locale: string = "ko"): TestSummary[] {
  return getAllTests(locale).filter((test) => test.isPopular);
}

export function getCategoryInfo(category: TestCategory): CategoryInfo | undefined {
  return categories.find((c) => c.id === category);
}

export function getTestById(id: string, locale: string = "ko"): Test | undefined {
  return getLocalizedTest(id, locale);
}

export function getTestSummaryById(id: string, locale: string = "ko"): TestSummary | undefined {
  const test = getTestById(id, locale);
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
export function getRelatedTests(currentTestId: string, limit: number = 3, locale: string = "ko"): TestSummary[] {
  const currentTest = getTestById(currentTestId, locale);
  if (!currentTest) return getPopularTests(locale).slice(0, limit);

  const currentCategory = testCategories[currentTestId];
  const allTests = getAllTests(locale);

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
export function getNextRecommendedTest(completedTestId: string, locale: string = "ko"): TestSummary | undefined {
  const recommendations = getRelatedTests(completedTestId, 1, locale);
  return recommendations[0];
}
