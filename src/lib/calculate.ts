import { Test, Result, UserAnswer } from "@/types/test";

export function calculateScores(answers: UserAnswer[]): Record<string, number> {
  const totalScores: Record<string, number> = {};

  answers.forEach((answer) => {
    Object.entries(answer.scores).forEach(([key, value]) => {
      totalScores[key] = (totalScores[key] || 0) + value;
    });
  });

  return totalScores;
}

export function determineResult(test: Test, answers: UserAnswer[]): Result {
  const scores = calculateScores(answers);

  // MBTI 스타일 계산
  if (isMbtiTest(scores)) {
    const mbtiType = calculateMbtiType(scores);
    const result = test.results.find((r) => r.id === mbtiType);
    if (result) return result;
  }

  // 강아지 성격 테스트 계산
  if (isDogPersonalityTest(scores)) {
    const dogType = calculateDogType(scores);
    const result = test.results.find((r) => r.id === dogType);
    if (result) return result;
  }

  // 일반 점수 기반 계산: 가장 높은 점수를 가진 결과 반환
  let maxScore = -Infinity;
  let maxResultId = test.results[0].id;

  Object.entries(scores).forEach(([resultId, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxResultId = resultId;
    }
  });

  const result = test.results.find((r) => r.id === maxResultId);
  return result || test.results[0];
}

function isMbtiTest(scores: Record<string, number>): boolean {
  const mbtiKeys = ["E", "I", "N", "S", "T", "F", "J", "P"];
  const scoreKeys = Object.keys(scores);
  return mbtiKeys.some((key) => scoreKeys.includes(key));
}

function isDogPersonalityTest(scores: Record<string, number>): boolean {
  const dogKeys = ["energy", "calm", "social", "shy", "loyal", "independent", "curious", "cautious", "cute", "cool"];
  const scoreKeys = Object.keys(scores);
  return dogKeys.some((key) => scoreKeys.includes(key));
}

function calculateDogType(scores: Record<string, number>): string {
  const energy = scores["energy"] || 0;
  const calm = scores["calm"] || 0;
  const social = scores["social"] || 0;
  const shy = scores["shy"] || 0;
  const loyal = scores["loyal"] || 0;
  const independent = scores["independent"] || 0;
  const curious = scores["curious"] || 0;
  const cautious = scores["cautious"] || 0;
  const cute = scores["cute"] || 0;
  const cool = scores["cool"] || 0;

  // 에너지 vs 차분
  const isEnergetic = energy > calm;
  // 사교적 vs 소심
  const isSocial = social > shy;
  // 충성 vs 독립
  const isLoyal = loyal > independent;
  // 호기심 vs 신중
  const isCurious = curious > cautious;
  // 귀여움 vs 쿨함
  const isCute = cute > cool;

  // 결과 조합
  if (isEnergetic && isSocial) return "energy-social";
  if (isEnergetic && !isSocial) return "energy-shy";
  if (!isEnergetic && isSocial) return "calm-social";
  if (!isEnergetic && !isSocial && !isLoyal) return "calm-shy";
  if (isLoyal && isCute) return "loyal-cute";
  if (isLoyal && !isCute) return "loyal-cool";
  if (!isLoyal && isCurious) return "independent-curious";
  if (!isLoyal && !isCurious) return "independent-cautious";

  return "loyal-cute"; // 기본값
}

function calculateMbtiType(scores: Record<string, number>): string {
  const e = scores["E"] || 0;
  const i = scores["I"] || 0;
  const n = scores["N"] || 0;
  const s = scores["S"] || 0;
  const t = scores["T"] || 0;
  const f = scores["F"] || 0;
  const j = scores["J"] || 0;
  const p = scores["P"] || 0;

  const first = e >= i ? "E" : "I";
  const second = n >= s ? "N" : "S";
  const third = t >= f ? "T" : "F";
  const fourth = j >= p ? "J" : "P";

  return `${first}${second}${third}${fourth}`;
}

export function getScorePercentages(
  scores: Record<string, number>
): Record<string, number> {
  const pairs = [
    ["E", "I"],
    ["N", "S"],
    ["T", "F"],
    ["J", "P"],
  ];

  const percentages: Record<string, number> = {};

  pairs.forEach(([a, b]) => {
    const scoreA = scores[a] || 0;
    const scoreB = scores[b] || 0;
    const total = scoreA + scoreB;

    if (total > 0) {
      percentages[a] = Math.round((scoreA / total) * 100);
      percentages[b] = Math.round((scoreB / total) * 100);
    } else {
      percentages[a] = 50;
      percentages[b] = 50;
    }
  });

  return percentages;
}
