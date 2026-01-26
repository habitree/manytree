import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getTestById, getAllTests, getTestEmoji } from "@/lib/tests";
import { Link } from "@/i18n/routing";
import { locales } from "@/i18n/config";

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  const tests = getAllTests();
  return locales.flatMap((locale) =>
    tests.map((test) => ({ locale, id: test.id }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, id } = await params;
  const test = getTestById(id, locale);
  if (!test) return { title: "Test not found" };

  return {
    title: `${test.title} | ManyTree`,
    description: test.description,
    openGraph: {
      title: test.title,
      description: test.description,
      images: test.thumbnail ? [{ url: test.thumbnail }] : [],
    },
  };
}

export default async function TestIntroPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const test = getTestById(id, locale);
  if (!test) {
    notFound();
  }

  const t = await getTranslations("test");
  const tResult = await getTranslations("result");
  const emoji = getTestEmoji(test.id);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 md:py-16 md:px-6">
      <div className="max-w-xl w-full scale-in">
        <div className="bg-white rounded-[2rem] shadow-large overflow-hidden border border-gray-100">
          {/* 썸네일 영역 */}
          <div
            className="h-56 md:h-64 relative overflow-hidden"
            style={{ backgroundColor: test.color || "#2D5A27" }}
          >
            {test.thumbnail && (
              <Image
                src={test.thumbnail}
                alt={test.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
            <div className="absolute bottom-4 left-4">
              <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-5xl">{emoji}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("questions", { count: test.questions.length })}
              </span>
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="p-6 md:p-10">
            <h1 className="text-2xl md:text-3xl font-extrabold text-deep-charcoal text-center mb-4 leading-tight">
              {test.title}
            </h1>
            <p className="text-base md:text-lg text-earth-gray text-center mb-8 leading-relaxed">
              {test.description}
            </p>

            {/* 테스트 정보 */}
            <div className="flex justify-center gap-8 md:gap-12 mb-8 bg-soft-beige p-5 rounded-2xl">
              <div className="text-center">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: test.color || "#2D5A27" }}
                >
                  {test.questions.length}
                </p>
                <p className="text-xs md:text-sm font-bold text-earth-gray mt-1">Q</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: test.color || "#2D5A27" }}
                >
                  {test.results.length}
                </p>
                <p className="text-xs md:text-sm font-bold text-earth-gray mt-1">Types</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: test.color || "#2D5A27" }}
                >
                  ~3min
                </p>
                <p className="text-xs md:text-sm font-bold text-earth-gray mt-1">Time</p>
              </div>
            </div>

            {/* 시작 버튼 */}
            <Link href={`/test/${test.id}/play/`}>
              <button
                className="w-full py-4 md:py-5 rounded-2xl text-white font-bold text-lg md:text-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3"
                style={{ backgroundColor: test.color || "#2D5A27" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("start")}
              </button>
            </Link>

            {/* 홈으로 */}
            <Link
              href="/"
              className="flex items-center justify-center gap-2 mt-6 text-base font-bold text-earth-gray hover:text-forest-green transition-colors py-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tResult("otherTests")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
