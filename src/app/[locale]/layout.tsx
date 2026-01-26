import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { locales, languages, type Locale } from "@/i18n/config";
import KakaoScript from "@/components/KakaoScript";
import LanguageSelector from "@/components/LanguageSelector";
import { Link } from "@/i18n/routing";
import "../globals.css";

// 정적 페이지 생성을 위한 파라미터
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 동적 메타데이터
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const meta = messages.meta as Record<string, string>;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "ManyTree" }],
    creator: "ManyTree",
    publisher: "ManyTree",
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "ko" ? "ko_KR" : locale === "ja" ? "ja_JP" : locale === "zh-CN" ? "zh_CN" : locale === "zh-TW" ? "zh_TW" : locale === "es" ? "es_ES" : "en_US",
      siteName: "ManyTree",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, l === "ko" ? "/" : `/${l}/`])
      ),
    },
  };
}

// 세련된 트리 로고 SVG
const TreeLogo = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <circle cx="20" cy="12" r="10" fill="url(#leafGradient)" />
    <circle cx="12" cy="18" r="7" fill="url(#leafGradient2)" />
    <circle cx="28" cy="18" r="7" fill="url(#leafGradient2)" />
    <circle cx="20" cy="20" r="8" fill="url(#leafGradient3)" />
    <rect x="17" y="24" width="6" height="12" rx="2" fill="url(#trunkGradient)" />
    <defs>
      <linearGradient id="leafGradient" x1="10" y1="2" x2="30" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ade80" />
        <stop offset="1" stopColor="#22c55e" />
      </linearGradient>
      <linearGradient id="leafGradient2" x1="5" y1="11" x2="35" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34d399" />
        <stop offset="1" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="leafGradient3" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22c55e" />
        <stop offset="1" stopColor="#16a34a" />
      </linearGradient>
      <linearGradient id="trunkGradient" x1="17" y1="24" x2="23" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a16207" />
        <stop offset="1" stopColor="#854d0e" />
      </linearGradient>
    </defs>
  </svg>
);

// 네비게이션 아이콘들
const NavIcons = {
  home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  about: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  contact: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 유효한 로케일인지 확인
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // 정적 렌더링 활성화
  setRequestLocale(locale);

  // 번역 메시지 로드
  const messages = await getMessages();
  const nav = messages.nav as Record<string, string>;
  const footer = messages.footer as Record<string, string>;

  return (
    <html lang={locale}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4166976105261105"
          crossOrigin="anonymous"
        />
        {/* hreflang 태그 */}
        {locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={l === "ko" ? "https://manytree.pages.dev/" : `https://manytree.pages.dev/${l}/`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://manytree.pages.dev/" />
      </head>
      <body className="font-sans antialiased bg-soft-beige">
        <NextIntlClientProvider messages={messages}>
          {/* 카카오 SDK */}
          <KakaoScript />

          {/* 헤더 */}
          <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <TreeLogo />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-forest-green tracking-tight leading-none">ManyTree</span>
                  <span className="text-[10px] text-gray-400 tracking-wider">PSYCHOLOGY TEST</span>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <nav className="hidden md:flex items-center gap-2">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-forest-green hover:bg-forest-green/5 px-4 py-2.5 rounded-xl transition-all duration-300"
                  >
                    {NavIcons.home}
                    {nav.home}
                  </Link>
                  <Link
                    href="/about/"
                    className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-forest-green hover:bg-forest-green/5 px-4 py-2.5 rounded-xl transition-all duration-300"
                  >
                    {NavIcons.about}
                    {nav.about}
                  </Link>
                  <Link
                    href="/contact/"
                    className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-forest-green hover:bg-forest-green/5 px-4 py-2.5 rounded-xl transition-all duration-300"
                  >
                    {NavIcons.contact}
                    {nav.contact}
                  </Link>
                </nav>

                {/* 언어 선택 */}
                <LanguageSelector />

                {/* 모바일 메뉴 버튼 */}
                <div className="md:hidden">
                  <Link
                    href="/"
                    className="p-2 text-gray-600 hover:text-forest-green rounded-lg transition-colors"
                  >
                    {NavIcons.home}
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* 메인 콘텐츠 */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* 브랜드 */}
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <TreeLogo />
                    <div className="flex flex-col">
                      <span className="font-bold text-xl text-white tracking-tight leading-none">ManyTree</span>
                      <span className="text-[10px] text-gray-400 tracking-wider">PSYCHOLOGY TEST</span>
                    </div>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
                    {footer.slogan}
                  </p>
                  {/* 소셜 아이콘 */}
                  <div className="flex gap-3 mt-5">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-forest-green/50 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-forest-green/50 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 빠른 링크 */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5 text-forest-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {footer.quickLinks}
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {footer.popularTests}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {footer.aboutService}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {footer.contactUs}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 법적 정보 */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5 text-forest-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {footer.policies}
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/privacy/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {footer.privacy}
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {footer.terms}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700/50 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-gray-400">{footer.copyright}</p>
                  <p className="text-xs text-gray-500 text-center md:text-right max-w-md">
                    {footer.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
