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
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">
          {current} / {total}
        </span>
        <span className="text-sm font-medium" style={{ color }}>
          {percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
