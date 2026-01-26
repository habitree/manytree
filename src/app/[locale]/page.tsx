import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import TestCard from "@/components/TestCard";
import AdBanner from "@/components/AdBanner";
import { Link } from "@/i18n/routing";
import { getAllTests, categories, getTestsByCategory, getPopularTests, type TestCategory } from "@/lib/tests";
import { locales } from "@/i18n/config";

// 정적 페이지 생성
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 아이콘 컴포넌트들
const Icons = {
  sparkles: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  star: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// 카테고리별 아이콘
const CategoryIcons: Record<string, React.ReactNode> = {
  personality: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  relationship: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  work: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  lifestyle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  fun: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tTest = await getTranslations("test");
  const tests = getAllTests(locale);
  const popularTests = getPopularTests(locale);

  // 카테고리 번역
  const categoryNames: Record<string, string> = {
    personality: t("categories.personality"),
    relationship: t("categories.love"),
    work: t("categories.work"),
    fun: t("categories.fun"),
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
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
              {t("hero.badge")}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-deep-charcoal mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-forest-green via-emerald-500 to-teal-500 bg-clip-text text-transparent">{t("hero.title")}</span>
            <br className="md:hidden" />
            <span className="block mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
              {t("hero.subtitle")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-earth-gray text-center mb-8 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {t("hero.description")}
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-earth-gray">
            <span className="flex items-center gap-1.5">
              {Icons.check}
              {t("trust.noSignup")}
            </span>
            <span className="flex items-center gap-1.5">
              {Icons.check}
              {t("trust.noData")}
            </span>
            <span className="flex items-center gap-1.5">
              {Icons.check}
              {t("trust.instant")}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#popular">
              <button className="w-full sm:w-auto bg-gradient-to-r from-forest-green to-emerald-500 hover:from-forest-green-600 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                {Icons.fire}
                {t("cta.button")}
              </button>
            </Link>
            <Link href="#categories">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-deep-charcoal font-bold py-4 px-10 rounded-2xl text-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200 flex items-center justify-center gap-3">
                {Icons.info}
                {t("categories.all")}
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 md:gap-12 mt-16 pt-8 border-t border-gray-200/50">
            <div className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-forest-green/10 to-emerald-500/10 rounded-xl flex items-center justify-center text-forest-green">
                  {Icons.chart}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-forest-green mb-1 group-hover:scale-110 transition-transform duration-300">
                {tests.length}+
              </div>
              <div className="text-sm text-earth-gray font-medium">{t("stats.tests")}</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-xl flex items-center justify-center text-amber-500">
                  {Icons.star}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-forest-green mb-1 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm text-earth-gray font-medium">{t("stats.results")}</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-xl flex items-center justify-center text-blue-500">
                  {Icons.users}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-forest-green mb-1 group-hover:scale-110 transition-transform duration-300">
                500K+
              </div>
              <div className="text-sm text-earth-gray font-medium">{t("stats.completed")}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <AdBanner format="horizontal" className="mb-12" />

          {/* Popular Tests Section */}
          <section id="popular" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                {Icons.fire}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                  {tTest("hot")} Tests
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularTests.map((test, index) => (
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

          {/* Category Section */}
          <section id="categories" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                {Icons.lightbulb}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                  {t("categories.all")}
                </h2>
              </div>
            </div>

            <div className="space-y-12">
              {categories.map((category) => {
                const categoryTests = getTestsByCategory(category.id as TestCategory, locale);
                if (categoryTests.length === 0) return null;

                return (
                  <div key={category.id} className="scroll-mt-24" id={`category-${category.id}`}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: category.color }}
                      >
                        {CategoryIcons[category.id]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-deep-charcoal flex items-center gap-2">
                          {categoryNames[category.id] || category.name}
                          <span className="text-sm font-normal text-earth-gray bg-gray-100 px-2 py-0.5 rounded-full">
                            {categoryTests.length}
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categoryTests.map((test, index) => (
                        <div
                          key={test.id}
                          className="stagger-item"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <TestCard test={test} showBadge={true} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <AdBanner format="auto" className="mb-16" />

          {/* Features Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-card card-hover text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-yellow-200">
                  {Icons.lightning}
                </div>
                <h3 className="font-bold text-xl text-deep-charcoal mb-3">{t("trust.instant")}</h3>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-card card-hover text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-pink-200">
                  {Icons.heart}
                </div>
                <h3 className="font-bold text-xl text-deep-charcoal mb-3">{t("trust.noData")}</h3>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-card card-hover text-center group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-green-200">
                  {Icons.shield}
                </div>
                <h3 className="font-bold text-xl text-deep-charcoal mb-3">{t("trust.noSignup")}</h3>
              </div>
            </div>
          </section>

          <AdBanner format="auto" className="mb-12" />

          {/* CTA Section */}
          <section className="mb-8">
            <div className="relative rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
                  alt="CTA Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-emerald-600/90" />
              </div>

              <div className="absolute inset-0 overflow-hidden z-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full" />
              </div>

              <div className="relative z-20">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  {t("cta.title")}
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
                  {t("cta.description")}
                </p>
                <Link href="/test/sample-mbti/">
                  <button className="bg-white text-forest-green font-bold py-4 px-10 rounded-2xl text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-3">
                    {tTest("start")}
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
