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
