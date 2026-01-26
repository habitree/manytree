import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  return {
    title: "Terms of Service | ManyTree",
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h1>
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Service Description</h2>
            <p className="text-gray-600 mb-4">
              ManyTree provides free personality tests for entertainment and self-understanding purposes.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              Test results are for entertainment only and do not replace professional psychological counseling or diagnosis.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Usage</h2>
            <p className="text-gray-600 mb-4">
              Users may use this service for personal, non-commercial purposes. Redistribution or modification of test content is prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
