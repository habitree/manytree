import Link from "next/link";
import Image from "next/image";
import TestCard from "@/components/TestCard";
import AdBanner from "@/components/AdBanner";
import { getAllTests } from "@/lib/tests";

// 아이콘 컴포넌트들
const Icons = {
  sparkles: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  play: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  fire: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
    </svg>
  ),
  lightning: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
};

export default function Home() {
  const tests = getAllTests();

  return (
    <div className="min-h-screen">
      {/* Hero Section - 세련된 디자인 */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-soft-beige via-soft-beige/95 to-soft-beige" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-forest-green/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-forest-green/5 to-teal-300/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-forest-green/10 to-emerald-500/10 text-forest-green rounded-full text-sm font-bold border border-forest-green/20 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-forest-green to-emerald-400 rounded-full animate-pulse" />
              100% 무료 심리테스트
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-deep-charcoal mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-forest-green via-emerald-500 to-teal-500 bg-clip-text text-transparent">ManyTree</span>
            <br className="md:hidden" />
            <span className="block mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
              나를 발견하는 따뜻한 여정
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-earth-gray text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            <span className="text-forest-green font-semibold">12가지 질문</span>으로 발견하는 나의 숨겨진 이야기
            <br className="hidden md:block" />
            재미있고 따뜻한 심리테스트를 경험해보세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#tests">
              <button className="w-full sm:w-auto bg-gradient-to-r from-forest-green to-emerald-500 hover:from-forest-green-600 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                {Icons.play}
                테스트 시작하기
              </button>
            </Link>
            <Link href="#about">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-deep-charcoal font-bold py-4 px-10 rounded-2xl text-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200 flex items-center justify-center gap-3">
                {Icons.info}
                자세히 알아보기
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 md:gap-12 mt-16 pt-8 border-t border-gray-200/50">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-forest-green mb-1 group-hover:scale-110 transition-transform duration-300">
                {tests.length}+
              </div>
              <div className="text-sm text-earth-gray font-medium">테스트</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-forest-green mb-1 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm text-earth-gray font-medium">결과 유형</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-forest-green mb-1 group-hover:scale-110 transition-transform duration-300">
                2분
              </div>
              <div className="text-sm text-earth-gray font-medium">소요 시간</div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Top Ad */}
          <AdBanner format="horizontal" className="mb-12" />

          {/* Popular Tests Section */}
          <section id="tests" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                {Icons.fire}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                  인기 테스트
                </h2>
                <p className="text-earth-gray text-sm mt-1">
                  지금 가장 많은 사람들이 즐기는 테스트
                </p>
              </div>
            </div>

            {/* Test Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tests.map((test, index) => (
                <div
                  key={test.id}
                  className="stagger-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TestCard test={test} />
                </div>
              ))}
            </div>
          </section>

          {/* Middle Ad */}
          <AdBanner format="auto" className="mb-16" />

          {/* MBTI Info Section - SEO */}
          <section id="about" className="mb-16">
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                  {Icons.lightbulb}
                </div>
                <h2 className="text-2xl font-bold text-deep-charcoal">MBTI란?</h2>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-earth-gray mb-6 leading-relaxed">
                  MBTI (Myers-Briggs Type Indicator)는 카를 융의 심리 유형론을 바탕으로
                  캐서린 쿡 브릭스와 그녀의 딸 이사벨 브릭스 마이어스가 개발한 성격 유형 지표입니다.
                </p>

                <p className="text-earth-gray mb-6 leading-relaxed">
                  MBTI는 4가지 선호 지표를 기반으로 16가지 성격 유형으로 분류합니다:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl border border-blue-100">
                    <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-sm">E/I</span>
                      에너지 방향
                    </h3>
                    <p className="text-sm text-blue-700">
                      <strong>외향형(E)</strong>: 외부 세계에서 에너지를 얻음<br />
                      <strong>내향형(I)</strong>: 내면 세계에서 에너지를 얻음
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-5 rounded-2xl border border-green-100">
                    <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-sm">S/N</span>
                      인식 기능
                    </h3>
                    <p className="text-sm text-green-700">
                      <strong>감각형(S)</strong>: 현재의 사실과 세부사항에 집중<br />
                      <strong>직관형(N)</strong>: 미래의 가능성과 패턴에 집중
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-5 rounded-2xl border border-orange-100">
                    <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-sm">T/F</span>
                      판단 기능
                    </h3>
                    <p className="text-sm text-orange-700">
                      <strong>사고형(T)</strong>: 논리와 객관적 분석을 중시<br />
                      <strong>감정형(F)</strong>: 관계와 조화를 중시
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-2xl border border-purple-100">
                    <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-sm">J/P</span>
                      생활 양식
                    </h3>
                    <p className="text-sm text-purple-700">
                      <strong>판단형(J)</strong>: 계획적이고 체계적인 생활 선호<br />
                      <strong>인식형(P)</strong>: 유연하고 적응적인 생활 선호
                    </p>
                  </div>
                </div>

                <p className="text-earth-gray">
                  ManyTree의 MBTI 테스트는 12가지 질문을 통해 당신의 성격 유형을 분석합니다.
                  재미있는 테스트이지만, 자신을 이해하는 좋은 출발점이 될 수 있어요.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mb-3">
                왜 ManyTree인가요?
              </h2>
              <p className="text-earth-gray">
                ManyTree를 선택하는 이유가 있습니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-card card-hover text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-yellow-200">
                  {Icons.lightning}
                </div>
                <h3 className="font-bold text-xl text-deep-charcoal mb-3">빠른 테스트</h3>
                <p className="text-earth-gray text-sm leading-relaxed">
                  단 몇 분 만에 당신의 성격 유형을 발견하세요.
                  긴 테스트는 지루하니까요.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-card card-hover text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-pink-200">
                  {Icons.heart}
                </div>
                <h3 className="font-bold text-xl text-deep-charcoal mb-3">아름다운 결과</h3>
                <p className="text-earth-gray text-sm leading-relaxed">
                  공유하고 싶은 예쁜 결과 카드.
                  SNS에 자랑해보세요!
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-card card-hover text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-green-200">
                  {Icons.shield}
                </div>
                <h3 className="font-bold text-xl text-deep-charcoal mb-3">개인정보 안전</h3>
                <p className="text-earth-gray text-sm leading-relaxed">
                  가입 없이 바로 시작. 결과는 당신의
                  브라우저에만 저장됩니다.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Ad */}
          <AdBanner format="auto" className="mb-12" />

          {/* CTA Section */}
          <section className="mb-8">
            <div className="relative rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl overflow-hidden">
              {/* 배경 이미지 */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
                  alt="CTA Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-emerald-600/90" />
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden z-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full" />
              </div>

              <div className="relative z-20">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  지금 바로 나를 발견해보세요
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
                  12가지 간단한 질문으로 시작하는 자기 발견의 여정
                </p>
                <Link href="/test/sample-mbti/">
                  <button className="bg-white text-forest-green font-bold py-4 px-10 rounded-2xl text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-3">
                    MBTI 테스트 시작하기
                    {Icons.arrow}
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
