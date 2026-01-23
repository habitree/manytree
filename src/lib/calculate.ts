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

  // 연애 스타일 테스트 계산
  if (isLoveStyleTest(scores)) {
    const loveType = calculateLoveType(scores);
    const result = test.results.find((r) => r.id === loveType);
    if (result) return result;
  }

  // 직장인 유형 테스트 계산
  if (isWorkStyleTest(scores)) {
    const workType = calculateWorkType(scores);
    const result = test.results.find((r) => r.id === workType);
    if (result) return result;
  }

  // 여행 스타일 테스트 계산
  if (isTravelStyleTest(scores)) {
    const travelType = calculateTravelType(scores);
    const result = test.results.find((r) => r.id === travelType);
    if (result) return result;
  }

  // 음식 취향 테스트 계산
  if (isFoodStyleTest(scores)) {
    const foodType = calculateFoodType(scores);
    const result = test.results.find((r) => r.id === foodType);
    if (result) return result;
  }

  // 스트레스 대처 테스트 계산
  if (isStressStyleTest(scores)) {
    const stressType = calculateStressType(scores);
    const result = test.results.find((r) => r.id === stressType);
    if (result) return result;
  }

  // 소통 스타일 테스트 계산
  if (isCommunicationStyleTest(scores)) {
    const commType = calculateCommunicationType(scores);
    const result = test.results.find((r) => r.id === commType);
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

// 연애 스타일 테스트
function isLoveStyleTest(scores: Record<string, number>): boolean {
  const loveKeys = ["romantic", "practical", "passionate", "calm", "independent", "dependent", "expressive", "reserved", "adventurous", "stable"];
  const scoreKeys = Object.keys(scores);
  return loveKeys.some((key) => scoreKeys.includes(key));
}

function calculateLoveType(scores: Record<string, number>): string {
  const romantic = scores["romantic"] || 0;
  const practical = scores["practical"] || 0;
  const passionate = scores["passionate"] || 0;
  const calm = scores["calm"] || 0;
  const independent = scores["independent"] || 0;
  const dependent = scores["dependent"] || 0;
  const expressive = scores["expressive"] || 0;
  const reserved = scores["reserved"] || 0;
  const adventurous = scores["adventurous"] || 0;
  const stable = scores["stable"] || 0;

  const isRomantic = romantic > practical;
  const isPassionate = passionate > calm;
  const isIndependent = independent > dependent;
  const isExpressive = expressive > reserved;
  const isAdventurous = adventurous > stable;

  if (isRomantic && isPassionate) return "romantic-passionate";
  if (!isRomantic && !isPassionate) return "practical-calm";
  if (isIndependent && isAdventurous) return "independent-adventurous";
  if (!isIndependent && isExpressive) return "dependent-expressive";
  if (!isPassionate && !isAdventurous) return "calm-stable";
  if (isPassionate && isExpressive) return "passionate-expressive";
  if (!isExpressive && isIndependent) return "reserved-independent";
  if (isRomantic && !isIndependent) return "romantic-dependent";

  return "romantic-passionate";
}

// 직장인 유형 테스트
function isWorkStyleTest(scores: Record<string, number>): boolean {
  const workKeys = ["leader", "supporter", "creative", "analytical", "team", "solo", "ambitious", "balanced", "planner", "flexible"];
  const scoreKeys = Object.keys(scores);
  return workKeys.some((key) => scoreKeys.includes(key));
}

function calculateWorkType(scores: Record<string, number>): string {
  const leader = scores["leader"] || 0;
  const supporter = scores["supporter"] || 0;
  const creative = scores["creative"] || 0;
  const analytical = scores["analytical"] || 0;
  const team = scores["team"] || 0;
  const solo = scores["solo"] || 0;
  const ambitious = scores["ambitious"] || 0;
  const balanced = scores["balanced"] || 0;
  const planner = scores["planner"] || 0;
  const flexible = scores["flexible"] || 0;

  const isLeader = leader > supporter;
  const isCreative = creative > analytical;
  const isTeam = team > solo;
  const isAmbitious = ambitious > balanced;
  const isPlanner = planner > flexible;

  if (isLeader && isAmbitious) return "leader-ambitious";
  if (!isLeader && isTeam) return "supporter-team";
  if (isCreative && !isPlanner) return "creative-flexible";
  if (!isCreative && isPlanner) return "analytical-planner";
  if (!isTeam && !isCreative) return "solo-analytical";
  if (!isAmbitious && !isPlanner) return "balanced-flexible";
  if (isTeam && isCreative) return "team-creative";
  if (isAmbitious && isPlanner) return "ambitious-planner";

  return "leader-ambitious";
}

// 여행 스타일 테스트
function isTravelStyleTest(scores: Record<string, number>): boolean {
  const travelKeys = ["adventure", "relaxation", "planner", "spontaneous", "culture", "nature", "luxury", "budget"];
  const scoreKeys = Object.keys(scores);
  return travelKeys.some((key) => scoreKeys.includes(key));
}

function calculateTravelType(scores: Record<string, number>): string {
  const adventure = scores["adventure"] || 0;
  const relaxation = scores["relaxation"] || 0;
  const planner = scores["planner"] || 0;
  const spontaneous = scores["spontaneous"] || 0;
  const culture = scores["culture"] || 0;
  const nature = scores["nature"] || 0;
  const social = scores["social"] || 0;
  const solo = scores["solo"] || 0;
  const luxury = scores["luxury"] || 0;
  const budget = scores["budget"] || 0;

  const isAdventure = adventure > relaxation;
  const isPlanner = planner > spontaneous;
  const isCulture = culture > nature;
  const isSocial = social > solo;
  const isLuxury = luxury > budget;

  if (isAdventure && !isPlanner) return "adventure-spontaneous";
  if (!isAdventure && isLuxury) return "relaxation-luxury";
  if (isCulture && isPlanner) return "culture-planner";
  if (!isCulture && !isSocial) return "nature-solo";
  if (isSocial && isAdventure) return "social-adventure";
  if (!isLuxury && !isPlanner) return "budget-spontaneous";
  if (isPlanner && isLuxury) return "planner-luxury";
  if (!isCulture && !isAdventure) return "nature-relaxation";

  return "adventure-spontaneous";
}

// 음식 취향 테스트
function isFoodStyleTest(scores: Record<string, number>): boolean {
  const foodKeys = ["adventurous", "traditional", "spicy", "mild", "sweet", "savory", "health", "taste"];
  const scoreKeys = Object.keys(scores);
  return foodKeys.some((key) => scoreKeys.includes(key));
}

function calculateFoodType(scores: Record<string, number>): string {
  const adventurous = scores["adventurous"] || 0;
  const traditional = scores["traditional"] || 0;
  const spicy = scores["spicy"] || 0;
  const mild = scores["mild"] || 0;
  const sweet = scores["sweet"] || 0;
  const savory = scores["savory"] || 0;
  const health = scores["health"] || 0;
  const taste = scores["taste"] || 0;
  const social = scores["social"] || 0;
  const solo = scores["solo"] || 0;

  const isAdventurous = adventurous > traditional;
  const isSpicy = spicy > mild;
  const isSweet = sweet > savory;
  const isHealth = health > taste;
  const isSocial = social > solo;

  if (isAdventurous && isSpicy && isSocial) return "adventurous-spicy-social";
  if (!isAdventurous && !isSpicy && !isSocial) return "traditional-mild-solo";
  if (isHealth && !isSweet && !isSocial) return "health-savory-solo";
  if (!isHealth && isSweet && isSocial) return "taste-sweet-social";
  if (isAdventurous && isHealth && isSocial) return "adventurous-health-social";
  if (!isAdventurous && !isHealth && isSocial) return "traditional-taste-social";
  if (isSpicy && !isHealth && !isSocial) return "spicy-taste-solo";
  if (!isSpicy && isSweet && isHealth) return "mild-sweet-health";

  return "adventurous-spicy-social";
}

// 스트레스 대처 테스트
function isStressStyleTest(scores: Record<string, number>): boolean {
  const stressKeys = ["active", "passive", "emotional", "rational", "escape", "confront", "express", "suppress"];
  const scoreKeys = Object.keys(scores);
  return stressKeys.some((key) => scoreKeys.includes(key));
}

function calculateStressType(scores: Record<string, number>): string {
  const active = scores["active"] || 0;
  const passive = scores["passive"] || 0;
  const social = scores["social"] || 0;
  const alone = scores["alone"] || 0;
  const emotional = scores["emotional"] || 0;
  const rational = scores["rational"] || 0;
  const escape = scores["escape"] || 0;
  const confront = scores["confront"] || 0;
  const express = scores["express"] || 0;
  const suppress = scores["suppress"] || 0;

  const isActive = active > passive;
  const isSocial = social > alone;
  const isEmotional = emotional > rational;
  const isEscape = escape > confront;
  const isExpress = express > suppress;

  if (isActive && isSocial) return "active-social";
  if (isActive && !isSocial) return "active-alone";
  if (isSocial && isExpress) return "social-express";
  if (!isSocial && !isActive) return "alone-passive";
  if (isEscape && isEmotional) return "escape-emotional";
  if (!isEmotional && !isEscape) return "rational-confront";
  if (isEmotional && isExpress) return "emotional-express";
  if (!isExpress && !isEmotional) return "suppress-rational";

  return "active-social";
}

// 소통 스타일 테스트
function isCommunicationStyleTest(scores: Record<string, number>): boolean {
  const commKeys = ["direct", "indirect", "listener", "talker", "logical", "formal", "casual", "online", "offline"];
  const scoreKeys = Object.keys(scores);
  return commKeys.some((key) => scoreKeys.includes(key));
}

function calculateCommunicationType(scores: Record<string, number>): string {
  const direct = scores["direct"] || 0;
  const indirect = scores["indirect"] || 0;
  const listener = scores["listener"] || 0;
  const talker = scores["talker"] || 0;
  const emotional = scores["emotional"] || 0;
  const logical = scores["logical"] || 0;
  const formal = scores["formal"] || 0;
  const casual = scores["casual"] || 0;
  const online = scores["online"] || 0;
  const offline = scores["offline"] || 0;

  const isDirect = direct > indirect;
  const isTalker = talker > listener;
  const isLogical = logical > emotional;
  const isFormal = formal > casual;
  const isOnline = online > offline;

  if (isDirect && isTalker && isLogical) return "direct-talker-logical";
  if (!isTalker && !isLogical) return "listener-emotional";
  if (isTalker && !isFormal && !isOnline) return "talker-casual-offline";
  if (isLogical && isFormal) return "logical-formal";
  if (!isDirect && !isTalker) return "indirect-listener";
  if (isOnline && !isDirect) return "online-indirect";
  if (!isLogical && !isFormal) return "emotional-casual";
  if (isFormal && !isTalker && isLogical) return "formal-listener-logical";

  return "direct-talker-logical";
}

// 테스트 유형별 점수 쌍 정의
const TEST_SCORE_PAIRS: Record<string, [string, string][]> = {
  "sample-mbti": [
    ["E", "I"],
    ["N", "S"],
    ["T", "F"],
    ["J", "P"],
  ],
  "dog-personality": [
    ["energy", "calm"],
    ["social", "shy"],
    ["loyal", "independent"],
    ["curious", "cautious"],
    ["cute", "cool"],
  ],
  "love-style": [
    ["romantic", "practical"],
    ["passionate", "calm"],
    ["independent", "dependent"],
    ["expressive", "reserved"],
    ["adventurous", "stable"],
  ],
  "work-style": [
    ["leader", "supporter"],
    ["creative", "analytical"],
    ["team", "solo"],
    ["ambitious", "balanced"],
    ["planner", "flexible"],
  ],
  "travel-style": [
    ["adventure", "relaxation"],
    ["planner", "spontaneous"],
    ["culture", "nature"],
    ["social", "solo"],
    ["luxury", "budget"],
  ],
  "food-style": [
    ["adventurous", "traditional"],
    ["spicy", "mild"],
    ["sweet", "savory"],
    ["health", "taste"],
    ["social", "solo"],
  ],
  "stress-style": [
    ["active", "passive"],
    ["social", "alone"],
    ["emotional", "rational"],
    ["escape", "confront"],
    ["express", "suppress"],
  ],
  "communication-style": [
    ["direct", "indirect"],
    ["listener", "talker"],
    ["emotional", "logical"],
    ["formal", "casual"],
    ["online", "offline"],
  ],
};

// 기본 MBTI 스타일 (fallback)
const DEFAULT_PAIRS: [string, string][] = [
  ["E", "I"],
  ["N", "S"],
  ["T", "F"],
  ["J", "P"],
];

export function getScorePercentages(
  scores: Record<string, number>,
  testId?: string
): Record<string, number> {
  // testId가 주어지면 해당 테스트의 점수 쌍 사용, 아니면 기본값
  const pairs = testId ? (TEST_SCORE_PAIRS[testId] || DEFAULT_PAIRS) : DEFAULT_PAIRS;

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
