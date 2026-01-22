import TestCard from "@/components/TestCard";
import { getAllTests } from "@/lib/tests";

export default function Home() {
  const tests = getAllTests();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🌳 ManyTree
          </h1>
          <p className="text-lg text-gray-500">
            다양한 심리테스트로 나를 알아가는 시간
          </p>
        </header>

        {/* 테스트 목록 */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-6">
            인기 테스트 🔥
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        </section>

        {/* 푸터 */}
        <footer className="mt-16 text-center text-sm text-gray-400">
          <p>© 2024 ManyTree. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
