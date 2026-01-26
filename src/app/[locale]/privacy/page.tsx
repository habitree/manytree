import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  return {
    title: "Privacy Policy | ManyTree",
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              ManyTree respects your privacy and is committed to protecting your personal information.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Data Collection</h2>
            <p className="text-gray-600 mb-4">
              We do not collect any personal information. Test results are stored only in your browser&apos;s local storage.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use essential cookies for basic site functionality and analytics cookies to improve our service.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contact</h2>
            <p className="text-gray-600">
              For privacy-related inquiries: contact@manytree.pages.dev
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
