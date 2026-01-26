import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tMeta = await getTranslations({ locale, namespace: "meta" });

  return {
    title: `${t("title")} | ManyTree`,
    description: tMeta("description"),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const tTest = await getTranslations("test");

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-forest-green to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
          <span className="text-6xl mb-4 block">🌳</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Accurate Analysis</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <span className="text-4xl mb-4 block">🆓</span>
            <h3 className="font-bold text-lg text-gray-800 mb-2">100% Free</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <span className="text-4xl mb-4 block">📱</span>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Easy Sharing</h3>
          </div>
        </div>

        <div className="text-center">
          <Link href="/">
            <button className="bg-forest-green hover:bg-forest-green/90 text-white font-bold py-4 px-8 rounded-xl transition-colors">
              {tTest("start")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
