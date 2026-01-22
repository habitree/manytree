import Link from "next/link";
import { TestSummary } from "@/types/test";

interface TestCardProps {
  test: TestSummary;
}

export default function TestCard({ test }: TestCardProps) {
  return (
    <Link href={`/test/${test.id}`} className="block group">
      <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div
          className="h-52 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: test.color || "#2D5A27" }}
        >
          {/* 장식용 패턴이나 이미지 대체 가능 */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
          <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
            🧠
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-warm-wood-600 bg-warm-wood-50 px-3 py-1 rounded-full">
              {test.questionCount}문항
            </span>
          </div>

          <h3 className="font-bold text-2xl text-deep-charcoal mb-3 group-hover:text-forest-green-600 transition-colors leading-tight">
            {test.title}
          </h3>

          <p className="text-earth-gray text-lg leading-relaxed mb-6 line-clamp-2">
            {test.description}
          </p>

          <div className="flex items-center justify-end">
            <span
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white transition-colors"
              style={{
                backgroundColor: test.color || "#2D5A27",
              }}
            >
              테스트 시작하기
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
