import Link from "next/link";
import TestCard from "@/components/TestCard";
import AdBanner from "@/components/AdBanner";
import { getAllTests } from "@/lib/tests";

export default function Home() {
  const tests = getAllTests();

  return (
    <div className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* 히어로 섹션 */}
        <section className="text-center py-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            나를 알아가는 심리테스트
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            다양한 심리테스트와 MBTI 테스트로 숨겨진 나의 모습을 발견해보세요.
            모든 테스트는 무료이며 회원가입이 필요 없습니다.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#tests">
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                테스트 시작하기
              </button>
            </Link>
            <Link href="/about/">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors">
                자세히 보기
              </button>
            </Link>
          </div>
        </section>

        {/* 상단 광고 */}
        <AdBanner format="horizontal" className="mb-8" />

        {/* 인기 테스트 */}
        <section id="tests" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              인기 테스트 🔥
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        </section>

        {/* 중간 광고 */}
        <AdBanner format="auto" className="mb-12" />

        {/* MBTI 설명 섹션 - SEO를 위한 콘텐츠 */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">MBTI란 무엇인가요?</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              MBTI(Myers-Briggs Type Indicator)는 캐서린 쿡 브릭스(Katharine Cook Briggs)와
              그의 딸 이사벨 브릭스 마이어스(Isabel Briggs Myers)가 칼 융의 심리 유형론을
              바탕으로 개발한 성격 유형 지표입니다.
            </p>
            <p className="text-gray-600 mb-4">
              MBTI는 4가지 선호 지표를 기반으로 16가지 성격 유형을 분류합니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">에너지 방향 (E/I)</h3>
                <p className="text-sm text-gray-600">
                  <strong>외향(E)</strong>: 외부 세계와 상호작용으로 에너지를 얻음<br />
                  <strong>내향(I)</strong>: 내면의 세계에서 에너지를 얻음
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">인식 기능 (S/N)</h3>
                <p className="text-sm text-gray-600">
                  <strong>감각(S)</strong>: 현재의 사실과 세부사항에 집중<br />
                  <strong>직관(N)</strong>: 미래의 가능성과 패턴에 집중
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">판단 기능 (T/F)</h3>
                <p className="text-sm text-gray-600">
                  <strong>사고(T)</strong>: 논리와 객관적 분석을 중시<br />
                  <strong>감정(F)</strong>: 가치와 인간관계를 중시
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">생활 양식 (J/P)</h3>
                <p className="text-sm text-gray-600">
                  <strong>판단(J)</strong>: 계획적이고 체계적인 생활 선호<br />
                  <strong>인식(P)</strong>: 유연하고 적응적인 생활 선호
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              ManyTree의 MBTI 테스트는 12개의 질문을 통해 당신의 성격 유형을 분석합니다.
              재미로 즐기는 테스트이지만, 자신을 이해하는 좋은 출발점이 될 수 있습니다.
            </p>
          </div>
        </section>

        {/* 특징 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">왜 ManyTree인가요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">빠른 테스트</h3>
              <p className="text-gray-500 text-sm">
                단 몇 분이면 나의 성격 유형을 알 수 있어요. 긴 테스트는 지루하니까요.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <span className="text-4xl mb-4 block">🎨</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">예쁜 결과 카드</h3>
              <p className="text-gray-500 text-sm">
                공유하고 싶어지는 예쁜 결과 카드. SNS에 자랑해보세요!
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <span className="text-4xl mb-4 block">🔒</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">개인정보 안전</h3>
              <p className="text-gray-500 text-sm">
                회원가입 없이 이용 가능. 결과는 내 브라우저에만 저장돼요.
              </p>
            </div>
          </div>
        </section>

        {/* 하단 광고 */}
        <AdBanner format="auto" className="mb-8" />

        {/* CTA 섹션 */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">지금 바로 나의 MBTI를 알아보세요!</h2>
          <p className="text-primary-100 mb-6">
            12개의 질문으로 나의 성격 유형을 분석해드립니다.
          </p>
          <Link href="/test/sample-mbti/">
            <button className="bg-white text-primary-600 font-bold py-3 px-8 rounded-xl hover:bg-primary-50 transition-colors">
              MBTI 테스트 시작
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
