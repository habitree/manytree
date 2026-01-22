import Link from "next/link";
import { notFound } from "next/navigation";
import { getTestById, getAllTests } from "@/lib/tests";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const tests = getAllTests();
  return tests.map((test) => ({ id: test.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const test = getTestById(id);
  if (!test) return { title: "테스트를 찾을 수 없습니다" };

  return {
    title: `${test.title} | ManyTree`,
    description: test.description,
    openGraph: {
      title: test.title,
      description: test.description,
    },
  };
}

export default async function TestIntroPage({ params }: Props) {
  const { id } = await params;
  const test = getTestById(id);

  if (!test) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* 썸네일 영역 */}
          <div
            className="h-56 flex items-center justify-center"
            style={{ backgroundColor: test.color || "#6366f1" }}
          >
            <div className="text-center text-white">
              <div className="text-7xl mb-4">🧠</div>
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              {test.title}
            </h1>
            <p className="text-gray-500 text-center mb-6 leading-relaxed">
              {test.description}
            </p>

            {/* 테스트 정보 */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: test.color }}>
                  {test.questions.length}
                </p>
                <p className="text-xs text-gray-400">질문</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: test.color }}>
                  {test.results.length}
                </p>
                <p className="text-xs text-gray-400">결과 유형</p>
              </div>
            </div>

            {/* 시작 버튼 */}
            <Link href={`/test/${test.id}/play`}>
              <button
                className="w-full py-4 rounded-xl text-white font-bold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: test.color || "#6366f1" }}
              >
                테스트 시작하기
              </button>
            </Link>

            {/* 홈으로 */}
            <Link
              href="/"
              className="block text-center mt-4 text-sm text-gray-400 hover:text-gray-600"
            >
              다른 테스트 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
