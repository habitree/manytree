import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | ManyTree",
  description: "ManyTree 심리테스트 서비스의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">개인정보처리방침</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              ManyTree(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며,
              「개인정보 보호법」을 준수하기 위해 노력하고 있습니다.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. 수집하는 개인정보 항목</h2>
              <p className="text-gray-600 mb-4">
                회사는 서비스 제공을 위해 다음과 같은 정보를 수집할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>테스트 응답 데이터 (브라우저 로컬 저장소에만 저장)</li>
                <li>서비스 이용 기록, 접속 로그, 쿠키</li>
                <li>기기 정보 (브라우저 종류, OS 등)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. 개인정보의 수집 및 이용목적</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>심리테스트 서비스 제공</li>
                <li>테스트 결과 저장 및 표시</li>
                <li>서비스 개선 및 통계 분석</li>
                <li>맞춤형 광고 제공 (Google AdSense)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. 개인정보의 보유 및 이용기간</h2>
              <p className="text-gray-600">
                테스트 결과는 사용자의 브라우저 로컬 저장소에만 저장되며,
                사용자가 직접 삭제하거나 브라우저 데이터를 삭제할 때까지 보관됩니다.
                회사 서버에는 개인을 식별할 수 있는 정보가 저장되지 않습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. 광고 및 쿠키 사용</h2>
              <p className="text-gray-600 mb-4">
                본 서비스는 Google AdSense를 통해 광고를 제공합니다.
                Google은 쿠키를 사용하여 이용자의 관심사에 기반한 광고를 표시할 수 있습니다.
              </p>
              <p className="text-gray-600">
                이용자는 브라우저 설정을 통해 쿠키를 거부하거나,
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Google 광고 설정
                </a>
                에서 맞춤 광고를 비활성화할 수 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. 개인정보의 제3자 제공</h2>
              <p className="text-gray-600">
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
                다만, 아래의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. 이용자의 권리</h2>
              <p className="text-gray-600">
                이용자는 언제든지 브라우저의 로컬 저장소를 삭제하여 저장된 테스트 결과를 삭제할 수 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. 개인정보 보호책임자</h2>
              <p className="text-gray-600">
                개인정보 처리에 관한 문의는 문의하기 페이지를 통해 연락해 주시기 바랍니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">8. 개인정보처리방침 변경</h2>
              <p className="text-gray-600">
                이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다.
                정책이 변경되는 경우 웹사이트를 통해 공지합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
