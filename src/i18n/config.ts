// 지원 언어 목록
export const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'es'] as const;
export type Locale = (typeof locales)[number];

// 기본 언어
export const defaultLocale: Locale = 'ko';

// 언어 정보 (UI 표시용)
export const languages: Record<Locale, { name: string; nativeName: string; flag: string }> = {
  ko: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  'zh-CN': { name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳' },
  'zh-TW': { name: 'Chinese (Traditional)', nativeName: '繁體中文', flag: '🇹🇼' },
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
};

// 로케일 유효성 검사
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
