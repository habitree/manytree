"use client";

import { useState, useEffect } from "react";

interface ShareButtonsProps {
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
}

export default function ShareButtons({ title, description, url, imageUrl }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [shareUrl, setShareUrl] = useState(url || "");
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    if (!url) {
      setShareUrl(window.location.href);
    }
    setCanShare(typeof navigator.share === "function");

    // 카카오 SDK 초기화 상태 체크
    const checkKakao = () => {
      if (typeof window !== "undefined" && window.Kakao && window.Kakao.isInitialized()) {
        setKakaoReady(true);
      }
    };

    // 초기 체크
    checkKakao();

    // SDK 로드 후 체크를 위한 interval
    const interval = setInterval(() => {
      checkKakao();
      if (kakaoReady) {
        clearInterval(interval);
      }
    }, 500);

    // 3초 후 interval 정리
    const timeout = setTimeout(() => clearInterval(interval), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [url, kakaoReady]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${title}\n${description}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleShareKakao = () => {
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        alert("카카오 SDK가 아직 초기화되지 않았습니다.\n잠시 후 다시 시도해주세요.");
        return;
      }

      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title,
          description,
          imageUrl: imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: "테스트 해보기",
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    } else {
      alert("카카오톡 공유 기능을 사용할 수 없습니다.\n페이지를 새로고침 후 다시 시도해주세요.");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-gray-500">친구들과 결과를 공유해보세요!</p>

      <div className="flex gap-3">
        {/* 카카오톡 */}
        <button
          onClick={handleShareKakao}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#FEE500] transition-all duration-300 ${
            kakaoReady ? "hover:opacity-90 hover:scale-105" : "opacity-70"
          }`}
          aria-label="카카오톡으로 공유"
          title={kakaoReady ? "카카오톡으로 공유" : "카카오 SDK 로딩 중..."}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.84 1.9 5.32 4.7 6.74-.15.55-.65 2.37-.74 2.76-.12.49.18.48.38.35.16-.1 2.54-1.73 3.57-2.43.68.1 1.39.15 2.09.15 5.52 0 10-3.58 10-8 0-4.42-4.48-8-10-8z"/>
          </svg>
        </button>

        {/* 트위터/X */}
        <button
          onClick={handleShareTwitter}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:opacity-90 hover:scale-105 transition-all duration-300"
          aria-label="X(트위터)로 공유"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>

        {/* 링크 복사 */}
        <button
          onClick={handleCopyLink}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 hover:scale-105 transition-all duration-300"
          aria-label="링크 복사"
        >
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          )}
        </button>

        {/* 네이티브 공유 (모바일) */}
        {canShare && (
          <button
            onClick={handleNativeShare}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-forest-green hover:bg-forest-green/90 hover:scale-105 transition-all duration-300"
            aria-label="공유하기"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
        )}
      </div>

      {copied && (
        <p className="text-sm text-green-500 fade-in font-medium">링크가 복사되었습니다!</p>
      )}
    </div>
  );
}
