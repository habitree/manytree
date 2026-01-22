"use client";

import { Question } from "@/types/test";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onSelect: (optionIndex: number) => void;
  color?: string;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onSelect,
  color = "#6366f1",
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-xl mx-auto fade-in">
      <div className="mb-8">
        <span
          className="inline-block text-sm font-medium px-3 py-1 rounded-full mb-4"
          style={{ backgroundColor: `${color}20`, color }}
        >
          Q{questionNumber}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="w-full p-4 md:p-5 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 group"
            style={{
              "--hover-border": color,
              "--hover-bg": `${color}10`,
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = color;
              e.currentTarget.style.backgroundColor = `${color}10`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-sm font-medium group-hover:text-white transition-colors"
                style={{ "--hover-bg": color } as React.CSSProperties}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-700 font-medium">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
