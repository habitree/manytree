import Link from "next/link";
import { TestSummary } from "@/types/test";

interface TestCardProps {
  test: TestSummary;
}

export default function TestCard({ test }: TestCardProps) {
  return (
    <Link href={`/test/${test.id}`}>
      <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
        <div
          className="h-48 flex items-center justify-center"
          style={{ backgroundColor: test.color || "#6366f1" }}
        >
          <div className="text-6xl">🧠</div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
            {test.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">
            {test.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {test.questionCount}개의 질문
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${test.color}20` || "#6366f120",
                color: test.color || "#6366f1",
              }}
            >
              시작하기
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
