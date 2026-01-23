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

export default function KakaoScript() {
  const kakaoJsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

  const handleKakaoLoad = () => {
    if (window.Kakao && !window.Kakao.isInitialized() && kakaoJsKey) {
      window.Kakao.init(kakaoJsKey);
      console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
    }
  };

  if (!kakaoJsKey) {
    console.warn("Kakao JS Key is not set. Please set NEXT_PUBLIC_KAKAO_JS_KEY in your environment variables.");
    return null;
  }

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
