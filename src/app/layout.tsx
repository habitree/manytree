import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ManyTree - 심리테스트",
  description: "다양한 심리테스트와 MBTI 테스트를 즐겨보세요! 재미있는 성격 테스트, MBTI 유형 검사, 연애 심리테스트 등 다양한 테스트를 무료로 제공합니다.",
  keywords: ["심리테스트", "MBTI", "성격테스트", "테스트", "MBTI테스트", "성격유형", "무료심리테스트", "연애테스트"],
  authors: [{ name: "ManyTree" }],
  creator: "ManyTree",
  publisher: "ManyTree",
  openGraph: {
    title: "ManyTree - 심리테스트",
    description: "다양한 심리테스트와 MBTI 테스트를 즐겨보세요!",
    type: "website",
    locale: "ko_KR",
    siteName: "ManyTree",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManyTree - 심리테스트",
    description: "다양한 심리테스트와 MBTI 테스트를 즐겨보세요!",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4166976105261105"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased bg-gray-50">
        {/* 헤더 */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌳</span>
              <span className="font-bold text-xl text-gray-800">ManyTree</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                홈
              </Link>
              <Link href="/about/" className="text-gray-600 hover:text-primary-600 transition-colors">
                소개
              </Link>
              <Link href="/contact/" className="text-gray-600 hover:text-primary-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 푸터 */}
        <footer className="bg-gray-800 text-gray-300 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 브랜드 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌳</span>
                  <span className="font-bold text-xl text-white">ManyTree</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  다양한 심리테스트로 나를 알아가는 시간.<br />
                  재미있고 정확한 테스트를 무료로 제공합니다.
                </p>
              </div>

              {/* 빠른 링크 */}
              <div>
                <h3 className="font-bold text-white mb-4">바로가기</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      인기 테스트
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/" className="hover:text-white transition-colors">
                      서비스 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/" className="hover:text-white transition-colors">
                      문의하기
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 법적 정보 */}
              <div>
                <h3 className="font-bold text-white mb-4">정책</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/privacy/" className="hover:text-white transition-colors">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms/" className="hover:text-white transition-colors">
                      이용약관
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2024 ManyTree. All rights reserved.</p>
              <p className="mt-2">
                본 사이트의 테스트 결과는 재미와 참고용이며, 전문적인 심리 상담을 대체하지 않습니다.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
