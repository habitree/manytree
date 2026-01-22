import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 | ManyTree",
  description: "ManyTree 심리테스트 서비스에 대한 문의사항을 남겨주세요.",
};

export default function ContactPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">문의하기</h1>
          <p className="text-gray-500 text-center mb-8">
            서비스 이용 중 궁금한 점이나 건의사항이 있으시면 아래로 연락해주세요.
          </p>

          {/* 연락처 정보 */}
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">이메일 문의</h3>
                <p className="text-gray-500 text-sm mb-2">
                  일반 문의, 서비스 제안, 버그 신고 등
                </p>
                <a
                  href="mailto:contact@manytree.pages.dev"
                  className="text-primary-600 hover:underline font-medium"
                >
                  contact@manytree.pages.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">제휴 문의</h3>
                <p className="text-gray-500 text-sm mb-2">
                  광고, 콘텐츠 제휴, 사업 협력 등
                </p>
                <a
                  href="mailto:partnership@manytree.pages.dev"
                  className="text-primary-600 hover:underline font-medium"
                >
                  partnership@manytree.pages.dev
                </a>
              </div>
            </div>
          </div>

          {/* 자주 묻는 질문 */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">자주 묻는 질문</h2>

            <div className="space-y-4">
              <details className="group border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium text-gray-800">테스트 결과는 저장되나요?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  테스트 결과는 사용자의 브라우저 로컬 저장소에만 저장됩니다.
                  회사 서버에는 개인을 식별할 수 있는 정보가 저장되지 않습니다.
                  브라우저 데이터를 삭제하면 결과도 함께 삭제됩니다.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium text-gray-800">테스트는 무료인가요?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  네, 모든 테스트는 완전 무료입니다. 회원가입 없이 바로 이용 가능합니다.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium text-gray-800">결과가 정확한가요?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  테스트 결과는 재미와 참고 목적으로 제공됩니다.
                  심리학적 이론을 참고하여 제작되었으나, 전문적인 심리 상담이나 진단을 대체할 수 없습니다.
                  정확한 분석이 필요하시면 전문가와 상담하시기 바랍니다.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium text-gray-800">새로운 테스트는 언제 추가되나요?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  새로운 테스트는 정기적으로 추가됩니다.
                  특정 테스트를 요청하고 싶으시면 이메일로 문의해주세요!
                </div>
              </details>

              <details className="group border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium text-gray-800">결과를 공유할 수 있나요?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  네! 결과 페이지에서 카카오톡, 트위터(X), 링크 복사 등으로 간편하게 공유할 수 있습니다.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
