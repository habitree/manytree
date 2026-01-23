"use client";

import { Result } from "@/types/test";
import { useEffect, useState } from "react";

interface ResultCardProps {
  result: Result;
  scores?: Record<string, number>;
  color?: string;
  testId?: string;
}

// 테스트 유형별 점수 쌍과 한글 라벨 정의
type ScorePair = {
  left: string;
  right: string;
  leftLabel: string;
  rightLabel: string;
  leftKorean: string;
  rightKorean: string;
};

const TEST_SCORE_PAIRS: Record<string, ScorePair[]> = {
  "sample-mbti": [
    { left: "E", right: "I", leftLabel: "E", rightLabel: "I", leftKorean: "외향형", rightKorean: "내향형" },
    { left: "N", right: "S", leftLabel: "N", rightLabel: "S", leftKorean: "직관형", rightKorean: "감각형" },
    { left: "T", right: "F", leftLabel: "T", rightLabel: "F", leftKorean: "사고형", rightKorean: "감정형" },
    { left: "J", right: "P", leftLabel: "J", rightLabel: "P", leftKorean: "판단형", rightKorean: "인식형" },
  ],
  "dog-personality": [
    { left: "energy", right: "calm", leftLabel: "E", rightLabel: "C", leftKorean: "활발함", rightKorean: "차분함" },
    { left: "social", right: "shy", leftLabel: "So", rightLabel: "Sh", leftKorean: "사교적", rightKorean: "소심함" },
    { left: "loyal", right: "independent", leftLabel: "L", rightLabel: "I", leftKorean: "충성스러움", rightKorean: "독립적" },
    { left: "curious", right: "cautious", leftLabel: "Cu", rightLabel: "Ca", leftKorean: "호기심", rightKorean: "신중함" },
    { left: "cute", right: "cool", leftLabel: "귀", rightLabel: "쿨", leftKorean: "귀여움", rightKorean: "쿨함" },
  ],
  "love-style": [
    { left: "romantic", right: "practical", leftLabel: "R", rightLabel: "P", leftKorean: "로맨틱", rightKorean: "현실적" },
    { left: "passionate", right: "calm", leftLabel: "Pa", rightLabel: "Ca", leftKorean: "열정적", rightKorean: "차분함" },
    { left: "independent", right: "dependent", leftLabel: "In", rightLabel: "De", leftKorean: "독립적", rightKorean: "의존적" },
    { left: "expressive", right: "reserved", leftLabel: "Ex", rightLabel: "Re", leftKorean: "표현적", rightKorean: "내성적" },
    { left: "adventurous", right: "stable", leftLabel: "Ad", rightLabel: "St", leftKorean: "모험적", rightKorean: "안정적" },
  ],
  "work-style": [
    { left: "leader", right: "supporter", leftLabel: "L", rightLabel: "S", leftKorean: "리더형", rightKorean: "서포터형" },
    { left: "creative", right: "analytical", leftLabel: "Cr", rightLabel: "An", leftKorean: "창의적", rightKorean: "분석적" },
    { left: "team", right: "solo", leftLabel: "T", rightLabel: "S", leftKorean: "팀워크", rightKorean: "개인작업" },
    { left: "ambitious", right: "balanced", leftLabel: "Am", rightLabel: "Ba", leftKorean: "야망형", rightKorean: "균형형" },
    { left: "planner", right: "flexible", leftLabel: "Pl", rightLabel: "Fl", leftKorean: "계획형", rightKorean: "유연형" },
  ],
  "travel-style": [
    { left: "adventure", right: "relaxation", leftLabel: "Ad", rightLabel: "Re", leftKorean: "모험", rightKorean: "휴식" },
    { left: "planner", right: "spontaneous", leftLabel: "Pl", rightLabel: "Sp", leftKorean: "계획형", rightKorean: "즉흥형" },
    { left: "culture", right: "nature", leftLabel: "Cu", rightLabel: "Na", leftKorean: "문화탐방", rightKorean: "자연탐방" },
    { left: "social", right: "solo", leftLabel: "So", rightLabel: "Si", leftKorean: "단체여행", rightKorean: "혼자여행" },
    { left: "luxury", right: "budget", leftLabel: "Lu", rightLabel: "Bu", leftKorean: "럭셔리", rightKorean: "가성비" },
  ],
  "food-style": [
    { left: "adventurous", right: "traditional", leftLabel: "Ad", rightLabel: "Tr", leftKorean: "도전적", rightKorean: "전통적" },
    { left: "spicy", right: "mild", leftLabel: "Sp", rightLabel: "Mi", leftKorean: "매운맛", rightKorean: "순한맛" },
    { left: "sweet", right: "savory", leftLabel: "Sw", rightLabel: "Sa", leftKorean: "단맛", rightKorean: "짠맛" },
    { left: "health", right: "taste", leftLabel: "He", rightLabel: "Ta", leftKorean: "건강중시", rightKorean: "맛중시" },
    { left: "social", right: "solo", leftLabel: "So", rightLabel: "Si", leftKorean: "함께식사", rightKorean: "혼밥" },
  ],
  "stress-style": [
    { left: "active", right: "passive", leftLabel: "Ac", rightLabel: "Pa", leftKorean: "능동적", rightKorean: "수동적" },
    { left: "social", right: "alone", leftLabel: "So", rightLabel: "Al", leftKorean: "사람들과", rightKorean: "혼자서" },
    { left: "emotional", right: "rational", leftLabel: "Em", rightLabel: "Ra", leftKorean: "감정적", rightKorean: "이성적" },
    { left: "escape", right: "confront", leftLabel: "Es", rightLabel: "Co", leftKorean: "회피형", rightKorean: "직면형" },
    { left: "express", right: "suppress", leftLabel: "Ex", rightLabel: "Su", leftKorean: "표출형", rightKorean: "억제형" },
  ],
  "communication-style": [
    { left: "direct", right: "indirect", leftLabel: "Di", rightLabel: "In", leftKorean: "직접적", rightKorean: "간접적" },
    { left: "listener", right: "talker", leftLabel: "Li", rightLabel: "Ta", leftKorean: "경청형", rightKorean: "수다형" },
    { left: "emotional", right: "logical", leftLabel: "Em", rightLabel: "Lo", leftKorean: "감성적", rightKorean: "논리적" },
    { left: "formal", right: "casual", leftLabel: "Fo", rightLabel: "Ca", leftKorean: "격식체", rightKorean: "친근체" },
    { left: "online", right: "offline", leftLabel: "On", rightLabel: "Of", leftKorean: "온라인", rightKorean: "오프라인" },
  ],
};

// 기본 MBTI 스타일 (fallback)
const DEFAULT_SCORE_PAIRS: ScorePair[] = [
  { left: "E", right: "I", leftLabel: "E", rightLabel: "I", leftKorean: "외향형", rightKorean: "내향형" },
  { left: "N", right: "S", leftLabel: "N", rightLabel: "S", leftKorean: "직관형", rightKorean: "감각형" },
  { left: "T", right: "F", leftLabel: "T", rightLabel: "F", leftKorean: "사고형", rightKorean: "감정형" },
  { left: "J", right: "P", leftLabel: "J", rightLabel: "P", leftKorean: "판단형", rightKorean: "인식형" },
];

// testId로 해당 테스트의 점수 쌍 가져오기
function getScorePairsForTest(testId?: string): ScorePair[] {
  if (!testId) return DEFAULT_SCORE_PAIRS;
  return TEST_SCORE_PAIRS[testId] || DEFAULT_SCORE_PAIRS;
}

// 테스트별 아이콘
const TestIcons: Record<string, React.ReactNode> = {
  "sample-mbti": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  "dog-personality": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V11h6.93c-.49 3.94-3.85 7-7.93 7.93z"/>
    </svg>
  ),
  "love-style": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  "work-style": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  "travel-style": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  "food-style": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
    </svg>
  ),
  "stress-style": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  "communication-style": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
};

function getTestIcon(testId?: string): React.ReactNode {
  if (!testId) return null;
  return TestIcons[testId] || null;
}

export default function ResultCard({ result, scores, color = "#6366f1", testId }: ResultCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const icon = getTestIcon(testId);

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.8}s`,
                backgroundColor: i % 4 === 0 ? color : i % 4 === 1 ? '#FFD700' : i % 4 === 2 ? '#FF6B6B' : '#4ECDC4',
                width: `${8 + Math.random() * 10}px`,
                height: `${8 + Math.random() * 10}px`,
                borderRadius: i % 2 === 0 ? '50%' : '3px',
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`
          rounded-[2rem] overflow-hidden shadow-2xl
          transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {/* Header Section */}
        <div
          className="h-64 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, 25)} 100%)` }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-xl" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            {icon ? (
              <div className="bounce-in opacity-90">
                {icon}
              </div>
            ) : (
              <div className="text-7xl bounce-in">
                {result.emoji || "🎉"}
              </div>
            )}
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-16 fill-white" preserveAspectRatio="none">
              <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-10 bg-white">
          {/* Result Title */}
          <div className="text-center mb-8">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm"
              style={{ backgroundColor: `${color}15`, color }}
            >
              YOUR RESULT
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-deep-charcoal leading-tight">
              {result.title}
            </h2>
          </div>

          {/* Tags */}
          {result.tags && (
            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {result.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: `${color}10`,
                    color: color,
                    boxShadow: `0 2px 8px ${color}15`,
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Description Card */}
          <div
            className="p-6 md:p-8 rounded-2xl mb-8 relative overflow-hidden"
            style={{ backgroundColor: '#faf9f7' }}
          >
            {/* Quote decoration */}
            <div
              className="absolute top-3 left-5 text-5xl opacity-10 font-serif"
              style={{ color }}
            >
              &ldquo;
            </div>
            <p className="text-base md:text-lg text-deep-charcoal leading-relaxed whitespace-pre-line font-medium relative z-10 pl-2">
              {result.description}
            </p>
          </div>

          {/* Score Chart - 테스트 유형에 맞는 차트 표시 */}
          {scores && (
            <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
              <h3
                className="text-base font-bold mb-6 text-center tracking-wider flex items-center justify-center gap-2"
                style={{ color: color }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                나의 성향 분석
              </h3>
              <ScoreChart scores={scores} color={color} testId={testId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ScoreChart({ scores, color, testId }: { scores: Record<string, number>; color: string; testId?: string }) {
  const pairs = getScorePairsForTest(testId);

  // 해당 테스트의 점수 키가 scores에 있는지 확인
  const hasRelevantScores = pairs.some(
    pair => (scores[pair.left] !== undefined && scores[pair.left] > 0) ||
            (scores[pair.right] !== undefined && scores[pair.right] > 0)
  );

  // 점수가 없으면 차트를 표시하지 않음
  if (!hasRelevantScores) return null;

  return (
    <div className="space-y-5">
      {pairs.map(({ left, right, leftLabel, rightLabel, leftKorean, rightKorean }, pairIndex) => {
        const leftScore = scores[left] || 0;
        const rightScore = scores[right] || 0;
        const total = leftScore + rightScore;

        // 해당 쌍에 점수가 없으면 건너뛰기
        if (total === 0) return null;

        const leftPercent = total > 0 ? Math.round((leftScore / total) * 100) : 50;
        const isLeftDominant = leftPercent >= 50;

        return (
          <div key={`${left}-${right}`} className="group">
            {/* 한글 라벨 */}
            <div className="flex justify-between mb-2 text-sm">
              <span
                className="font-semibold transition-all duration-300"
                style={{ color: isLeftDominant ? color : '#9ca3af' }}
              >
                {leftKorean}
              </span>
              <span
                className="font-semibold transition-all duration-300"
                style={{ color: !isLeftDominant ? color : '#9ca3af' }}
              >
                {rightKorean}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Left label */}
              <div
                className={`
                  w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm
                  transition-all duration-500 shadow-sm
                  ${isLeftDominant ? 'scale-105' : 'scale-100 opacity-60'}
                `}
                style={{
                  background: isLeftDominant ? `linear-gradient(135deg, ${color}, ${adjustColor(color, 15)})` : '#f3f4f6',
                  color: isLeftDominant ? '#fff' : '#9ca3af',
                }}
              >
                {leftLabel}
              </div>

              {/* Progress bar container */}
              <div className="flex-1 relative">
                <div className="flex h-3 rounded-full overflow-hidden bg-gray-100 shadow-inner">
                  {/* Left bar */}
                  <div
                    className="h-full transition-all duration-700 ease-out progress-bar relative overflow-hidden"
                    style={{
                      width: `${leftPercent}%`,
                      background: `linear-gradient(90deg, ${color}, ${adjustColor(color, 15)})`,
                      animationDelay: `${pairIndex * 0.15}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                  {/* Right bar */}
                  <div
                    className="h-full bg-gray-200 transition-all duration-700 ease-out"
                    style={{ width: `${100 - leftPercent}%` }}
                  />
                </div>

                {/* Percentage labels */}
                <div className="flex justify-between mt-1.5 text-xs font-bold">
                  <span style={{ color: isLeftDominant ? color : '#9ca3af' }}>
                    {leftPercent}%
                  </span>
                  <span style={{ color: !isLeftDominant ? color : '#9ca3af' }}>
                    {100 - leftPercent}%
                  </span>
                </div>
              </div>

              {/* Right label */}
              <div
                className={`
                  w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm
                  transition-all duration-500 shadow-sm
                  ${!isLeftDominant ? 'scale-105' : 'scale-100 opacity-60'}
                `}
                style={{
                  background: !isLeftDominant ? `linear-gradient(135deg, ${color}, ${adjustColor(color, 15)})` : '#f3f4f6',
                  color: !isLeftDominant ? '#fff' : '#9ca3af',
                }}
              >
                {rightLabel}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Helper function to adjust color brightness
function adjustColor(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  return '#' + (0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}
