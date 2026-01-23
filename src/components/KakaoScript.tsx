"use client";

import Script from "next/script";

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: KakaoShareOptions) => void;
      };
    };
  }
}

interface KakaoShareOptions {
  objectType: "feed";
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  buttons?: Array<{
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }>;
}

// 카카오 JavaScript 키 (클라이언트 노출용 - 도메인 제한으로 보안 유지)
const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "8343cb1720872c3417a8505b23ac0ea1";

export default function KakaoScript() {
  const handleKakaoLoad = () => {
    if (window.Kakao && !window.Kakao.isInitialized() && KAKAO_JS_KEY) {
      window.Kakao.init(KAKAO_JS_KEY);
      console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
    }
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
      integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Ber1RBE"
      crossOrigin="anonymous"
      onLoad={handleKakaoLoad}
      strategy="afterInteractive"
    />
  );
}
