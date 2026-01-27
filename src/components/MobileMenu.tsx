"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Link, usePathname } from "@/i18n/routing";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  // 경로 변경 시 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ESC 키로 메뉴 닫기
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // 메뉴 열릴 때 첫 번째 항목에 포커스
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstItemRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 오버레이 클릭 시 닫기
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* 햄버거 버튼 */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-forest-green hover:bg-forest-green/5
                   rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* 오버레이 + 슬라이드 메뉴 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm animate-fade-in"
          onClick={handleOverlayClick}
          aria-hidden="true"
        >
          <div
            ref={menuRef}
            id="mobile-menu"
            role="navigation"
            aria-label="모바일 메뉴"
            className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl
                       transform animate-slide-in-right"
          >
            {/* 메뉴 헤더 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-semibold text-gray-800">메뉴</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100
                           rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green/50"
                aria-label="메뉴 닫기"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 메뉴 항목 */}
            <nav className="p-4">
              <ul className="space-y-2" role="menu">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <li key={item.href} role="none">
                      <Link
                        ref={index === 0 ? firstItemRef : undefined}
                        href={item.href as "/" | "/about/" | "/contact/" | "/privacy/" | "/terms/"}
                        role="menuitem"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                                   transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest-green/50
                                   ${isActive
                            ? "bg-forest-green/10 text-forest-green"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                      >
                        <span className={isActive ? "text-forest-green" : "text-gray-400"}>
                          {item.icon}
                        </span>
                        {item.label}
                        {isActive && (
                          <svg
                            className="w-4 h-4 ml-auto text-forest-green"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* 하단 브랜딩 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
              <div className="text-center text-xs text-gray-400">
                ManyTree Psychology Test
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
