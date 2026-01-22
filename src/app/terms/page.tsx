import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | ManyTree",
  description: "ManyTree 심리테스트 서비스의 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">이용약관</h1>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제1조 (목적)</h2>
              <p className="text-gray-600">
                이 약관은 ManyTree(이하 &quot;회사&quot;)가 제공하는 심리테스트 서비스(이하 &quot;서비스&quot;)의
                이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제2조 (용어의 정의)</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>&quot;서비스&quot;란 회사가 제공하는 심리테스트, MBTI 테스트 등 모든 온라인 테스트 콘텐츠를 말합니다.</li>
                <li>&quot;이용자&quot;란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                <li>&quot;콘텐츠&quot;란 회사가 서비스에서 제공하는 테스트, 결과, 이미지, 텍스트 등 모든 정보를 말합니다.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제3조 (약관의 효력 및 변경)</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
                <li>회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력을 발생합니다.</li>
                <li>이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제4조 (서비스의 제공)</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>회사는 다음과 같은 서비스를 제공합니다:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>심리테스트 및 MBTI 테스트</li>
                    <li>테스트 결과 제공 및 공유 기능</li>
                    <li>기타 회사가 정하는 서비스</li>
                  </ul>
                </li>
                <li>서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다.</li>
                <li>회사는 시스템 점검, 장애 복구 등의 사유로 서비스를 일시적으로 중단할 수 있습니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제5조 (서비스의 한계)</h2>
              <p className="text-gray-600 mb-4">
                <strong>중요:</strong> 본 서비스에서 제공하는 모든 테스트 결과는 오락 및 참고 목적으로만 제공됩니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>테스트 결과는 전문적인 심리 상담, 의료 진단, 또는 치료를 대체하지 않습니다.</li>
                <li>정신 건강에 관한 문제가 있는 경우 반드시 전문가와 상담하시기 바랍니다.</li>
                <li>테스트 결과를 중요한 의사결정의 근거로 사용하지 마십시오.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제6조 (이용자의 의무)</h2>
              <p className="text-gray-600 mb-4">이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>서비스를 이용하여 법령 또는 이 약관에서 금지하거나 공서양속에 반하는 행위</li>
                <li>회사의 서비스를 무단으로 복제, 수정, 배포하는 행위</li>
                <li>서비스의 안정적 운영을 방해하는 행위</li>
                <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제7조 (지적재산권)</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>서비스에 포함된 모든 콘텐츠의 저작권은 회사에 귀속됩니다.</li>
                <li>이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 상업적으로 이용하거나 제3자에게 제공할 수 없습니다.</li>
                <li>테스트 결과의 SNS 공유는 허용되나, 콘텐츠 자체를 무단 복제하는 것은 금지됩니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제8조 (광고)</h2>
              <p className="text-gray-600">
                회사는 서비스 운영을 위해 광고를 게재할 수 있으며, 이용자는 서비스 이용 시 노출되는 광고에 대해 동의합니다.
                광고와 관련된 모든 권리와 책임은 광고주에게 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">제9조 (면책조항)</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>회사는 천재지변, 불가항력 등으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
                <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                <li>회사는 테스트 결과의 정확성이나 신뢰성에 대해 어떠한 보증도 하지 않습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">제10조 (분쟁 해결)</h2>
              <p className="text-gray-600">
                서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 이용자는 분쟁 해결을 위해
                성실히 협의합니다. 협의가 이루어지지 않을 경우 관련 법령에 따라 해결합니다.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                시행일자: 2024년 1월 1일
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
