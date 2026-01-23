"use client";

import { Question } from "@/types/test";
import { useState } from "react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onSelect: (optionIndex: number) => void;
  color?: string;
}

// 아이콘 컴포넌트
const Icons = {
  check: (color: string) => (
    <svg className="w-5 h-5" fill="none" stroke={color} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  ),
  progress: (color: string) => (
    <svg className="w-4 h-4" fill="none" stroke={color} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onSelect,
  color = "#6366f1",
}: QuestionCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnimating) return;

    setSelectedIndex(index);
    setIsAnimating(true);

    // Wait for animation before calling onSelect
    setTimeout(() => {
      onSelect(index);
      setSelectedIndex(null);
      setIsAnimating(false);
    }, 400);
  };

  const progress = (questionNumber / totalQuestions) * 100;

  // 밝은 버전의 색상 생성
  const lightColor = `${color}15`;
  const mediumColor = `${color}25`;

  return (
    <div className="w-full max-w-2xl mx-auto scale-in">
      {/* Progress Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-1.5 rounded-full shadow-sm"
            style={{ backgroundColor: lightColor, color }}
          >
            {Icons.progress(color)}
            <span className="font-extrabold">{questionNumber}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{totalQuestions}</span>
          </span>
          <span
            className="text-sm font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: lightColor, color }}
          >
            {Math.round(progress)}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${color}, ${adjustColor(color, 20)})`,
            }}
          >
            {/* 반짝이는 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>

      {/* Question Text */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal leading-snug">
          {question.text}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const optionLetter = String.fromCharCode(65 + index);

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={isAnimating}
              className={`
                w-full p-5 md:p-6 text-left bg-white rounded-2xl
                transition-all duration-300 group relative overflow-hidden
                ${isSelected ? 'scale-[0.98]' : 'hover:scale-[1.01]'}
                ${isAnimating && !isSelected ? 'opacity-50' : 'opacity-100'}
              `}
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isSelected ? color : 'transparent',
                backgroundColor: isSelected ? lightColor : '#ffffff',
                boxShadow: isSelected
                  ? `0 8px 25px ${color}30`
                  : '0 2px 12px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Ripple effect background */}
              {isSelected && (
                <div
                  className="absolute inset-0 animate-pulse"
                  style={{
                    background: `radial-gradient(circle at center, ${mediumColor} 0%, transparent 70%)`,
                  }}
                />
              )}

              <div className="flex items-center gap-4 relative z-10">
                {/* Option letter badge */}
                <span
                  className={`
                    flex-shrink-0 w-12 h-12 flex items-center justify-center
                    rounded-xl text-lg font-bold transition-all duration-300
                    ${isSelected ? 'text-white scale-110 shadow-lg' : 'text-gray-500 group-hover:text-white group-hover:shadow-md'}
                  `}
                  style={{
                    backgroundColor: isSelected ? color : undefined,
                    background: isSelected ? `linear-gradient(135deg, ${color}, ${adjustColor(color, 15)})` : 'rgb(243 244 246)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${color}, ${adjustColor(color, 15)})`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgb(243 244 246)';
                    }
                  }}
                >
                  {optionLetter}
                </span>

                {/* Option text */}
                <span
                  className={`
                    flex-1 text-base md:text-lg font-semibold transition-colors duration-300
                    ${isSelected ? '' : 'text-deep-charcoal group-hover:text-gray-700'}
                  `}
                  style={{
                    color: isSelected ? color : undefined,
                  }}
                >
                  {option.text}
                </span>

                {/* Check icon (shows on selection) */}
                {isSelected && (
                  <div className="ml-auto bounce-in">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: lightColor }}
                    >
                      {Icons.check(color)}
                    </div>
                  </div>
                )}
              </div>

              {/* Hover indicator */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l-2xl"
                style={{ background: `linear-gradient(180deg, ${color}, ${adjustColor(color, 20)})` }}
              />
            </button>
          );
        })}
      </div>
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
