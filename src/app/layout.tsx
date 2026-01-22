import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ManyTree - 심리테스트",
  description: "다양한 심리테스트와 MBTI 테스트를 즐겨보세요!",
  keywords: ["심리테스트", "MBTI", "성격테스트", "테스트"],
  openGraph: {
    title: "ManyTree - 심리테스트",
    description: "다양한 심리테스트와 MBTI 테스트를 즐겨보세요!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
