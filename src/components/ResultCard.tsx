import { Result } from "@/types/test";

interface ResultCardProps {
  result: Result;
  scores?: Record<string, number>;
  color?: string;
}

export default function ResultCard({ result, scores, color = "#6366f1" }: ResultCardProps) {
  return (
    <div className="w-full max-w-xl mx-auto slide-up">
      <div
        className="rounded-3xl overflow-hidden shadow-xl"
        style={{ backgroundColor: `${color}10` }}
      >
        <div
          className="h-48 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <div className="text-center text-white">
            <div className="text-6xl mb-2">🎉</div>
            <p className="text-lg font-medium opacity-90">당신의 결과는...</p>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
            {result.title}
          </h2>

          {result.tags && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {result.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-600 leading-relaxed text-center whitespace-pre-line">
            {result.description}
          </p>

          {scores && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-4 text-center">
                성향 분석
              </h3>
              <MbtiScoreChart scores={scores} color={color} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MbtiScoreChart({ scores, color }: { scores: Record<string, number>; color: string }) {
  const pairs = [
    { left: "E", right: "I", leftLabel: "외향", rightLabel: "내향" },
    { left: "N", right: "S", leftLabel: "직관", rightLabel: "감각" },
    { left: "T", right: "F", leftLabel: "사고", rightLabel: "감정" },
    { left: "J", right: "P", leftLabel: "판단", rightLabel: "인식" },
  ];

  return (
    <div className="space-y-4">
      {pairs.map(({ left, right, leftLabel, rightLabel }) => {
        const leftScore = scores[left] || 0;
        const rightScore = scores[right] || 0;
        const total = leftScore + rightScore;
        const leftPercent = total > 0 ? Math.round((leftScore / total) * 100) : 50;

        return (
          <div key={`${left}-${right}`} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium" style={{ color: leftPercent >= 50 ? color : "#9ca3af" }}>
                {left} ({leftLabel}) {leftPercent}%
              </span>
              <span className="font-medium" style={{ color: leftPercent < 50 ? color : "#9ca3af" }}>
                {100 - leftPercent}% ({rightLabel}) {right}
              </span>
            </div>
            <div className="flex h-2 rounded-full overflow-hidden bg-gray-200">
              <div
                className="transition-all duration-500"
                style={{ width: `${leftPercent}%`, backgroundColor: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
