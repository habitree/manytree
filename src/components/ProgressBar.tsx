interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
}

export default function ProgressBar({
  current,
  total,
  color = "#6366f1",
}: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-3">
        <span className="text-xl font-bold text-earth-gray">
          질문 {current} / {total}
        </span>
        <span className="text-2xl font-black" style={{ color }}>
          {percentage}% 완료
        </span>
      </div>
      <div className="w-full h-5 bg-gray-100 rounded-full overflow-hidden shadow-inner border border-gray-200">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out shadow-sm"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
