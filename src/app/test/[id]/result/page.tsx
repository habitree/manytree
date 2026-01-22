import { getAllTests } from "@/lib/tests";
import TestResultClient from "@/components/TestResultClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const tests = getAllTests();
  return tests.map((test) => ({ id: test.id }));
}

export default async function TestResultPage({ params }: Props) {
  const { id } = await params;
  return <TestResultClient testId={id} />;
}
