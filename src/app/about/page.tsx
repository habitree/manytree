import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 소개 | ManyTree",
  description: "ManyTree는 다양한 심리테스트와 MBTI 테스트를 무료로 제공하는 서비스입니다.",
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 히어로 섹션 */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
          <span className="text-6xl mb-4 block">🌳</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ManyTree 소개</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            다양한 심리테스트로 나를 알아가는 시간,<br />
            ManyTree와 함께 진짜 나를 발견해보세요.
          </p>
        </div>

        {/* 서비스 특징 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="font-bold text-lg text-gray-800 mb-2">정확한 분석</h3>
            <p className="text-gray-500 text-sm">
              심리학 이론을 바탕으로 설계된 질문과 결과 분석으로 당신의 성격을 정확하게 파악합니다.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <span className="text-4xl mb-4 block">🆓</span>
            <h3 className="font-bold text-lg text-gray-800 mb-2">완전 무료</h3>
            <p className="text-gray-500 text-sm">
              모든 테스트를 무료로 이용할 수 있습니다. 회원가입 없이 바로 시작하세요.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <span className="text-4xl mb-4 block">📱</span>
            <h3 className="font-bold text-lg text-gray-800 mb-2">간편한 공유</h3>
            <p className="text-gray-500 text-sm">
              테스트 결과를 SNS로 간편하게 공유하고 친구들과 비교해보세요.
            </p>
          </div>
        </div>

        {/* 제공하는 테스트 */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">제공하는 테스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">🧠 MBTI 테스트</h3>
              <p className="text-gray-500 text-sm">
                16가지 성격 유형 중 당신의 MBTI를 알아보세요.
                E/I, N/S, T/F, J/P 4가지 축으로 분석합니다.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">💕 연애 테스트</h3>
              <p className="text-gray-500 text-sm">
                연애 스타일, 이상형 분석 등 다양한 연애 관련 테스트를 준비 중입니다.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">💼 직업 적성 테스트</h3>
              <p className="text-gray-500 text-sm">
                나에게 맞는 직업과 진로를 찾아보는 적성 테스트를 준비 중입니다.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">🎭 성격 테스트</h3>
              <p className="text-gray-500 text-sm">
                다양한 관점에서 나의 성격을 분석하는 재미있는 테스트를 준비 중입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 주의사항 */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold text-amber-800 mb-4">📌 이용 시 주의사항</h2>
          <ul className="text-amber-700 space-y-2">
            <li>• 본 서비스의 테스트 결과는 오락 및 참고 목적으로만 제공됩니다.</li>
            <li>• 테스트 결과는 전문적인 심리 상담이나 의료 진단을 대체하지 않습니다.</li>
            <li>• 정신 건강에 관한 문제가 있으시다면 반드시 전문가와 상담하세요.</li>
            <li>• 중요한 의사결정의 유일한 근거로 사용하지 마세요.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">지금 바로 시작해보세요!</h2>
          <p className="text-gray-500 mb-6">
            회원가입 없이 바로 테스트를 시작할 수 있습니다.
          </p>
          <Link href="/">
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-colors">
              테스트 하러 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
