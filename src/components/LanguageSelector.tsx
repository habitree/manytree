"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { locales, languages, type Locale } from "@/i18n/config";
import { useState, useRef, useEffect, useCallback } from "react";

// 언어 코드 매핑 (모바일 표시용)
const languageCodes: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
  ja: "JA",
  "zh-CN": "CN",
  "zh-TW": "TW",
  es: "ES",
};

export default function LanguageSelector() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");

  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 키보드 네비게이션
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          event.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const next = prev < locales.length - 1 ? prev + 1 : 0;
            menuItemRefs.current[next]?.focus();
            return next;
          });
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : locales.length - 1;
            menuItemRefs.current[next]?.focus();
            return next;
          });
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          menuItemRefs.current[0]?.focus();
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(locales.length - 1);
          menuItemRefs.current[locales.length - 1]?.focus();
          break;
        case "Tab":
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // 드롭다운 열릴 때 첫 번째 항목에 포커스
  useEffect(() => {
    if (isOpen) {
      const currentIndex = locales.indexOf(locale);
      setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      setTimeout(() => {
        menuItemRefs.current[currentIndex >= 0 ? currentIndex : 0]?.focus();
      }, 50);
    }
  }, [isOpen, locale]);

  const handleLanguageChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const currentLanguage = languages[locale];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600
                   border border-gray-200 hover:border-forest-green/50
                   hover:text-forest-green hover:bg-forest-green/5 hover:shadow-sm
                   rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
        aria-label={t("select")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="language-menu"
      >
        <span className="text-lg" aria-hidden="true">{currentLanguage.flag}</span>
        <span className="sm:hidden text-xs font-semibold">{languageCodes[locale]}</span>
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="language-menu"
          role="listbox"
          aria-label={t("select")}
          aria-activedescendant={focusedIndex >= 0 ? `language-option-${locales[focusedIndex]}` : undefined}
          className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50
                     animate-fade-in origin-top-right"
        >
          {locales.map((l, index) => {
            const lang = languages[l];
            const isActive = l === locale;
            const isFocused = index === focusedIndex;

            return (
              <button
                key={l}
                id={`language-option-${l}`}
                ref={(el) => { menuItemRefs.current[index] = el; }}
                onClick={() => handleLanguageChange(l)}
                role="option"
                aria-selected={isActive}
                tabIndex={isFocused ? 0 : -1}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200
                           focus:outline-none focus:bg-forest-green/10
                           ${isActive
                    ? "bg-forest-green/10 text-forest-green font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                  }
                           ${isFocused && !isActive ? "bg-gray-50" : ""}
                `}
              >
                <span className="text-lg" aria-hidden="true">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.nativeName}</span>
                <span className="text-xs text-gray-400 font-mono">{languageCodes[l]}</span>
                {isActive && (
                  <svg className="w-4 h-4 text-forest-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
