import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: `${t("title")} | ManyTree`,
    description: t("subtitle"),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">{t("title")}</h1>
          <p className="text-gray-500 text-center mb-8">{t("subtitle")}</p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                <a
                  href="mailto:contact@manytree.pages.dev"
                  className="text-forest-green hover:underline font-medium"
                >
                  contact@manytree.pages.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Partnership</h3>
                <a
                  href="mailto:partnership@manytree.pages.dev"
                  className="text-forest-green hover:underline font-medium"
                >
                  partnership@manytree.pages.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
