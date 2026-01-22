import { getAllTests } from "@/lib/tests";
import TestPlayClient from "@/components/TestPlayClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const tests = getAllTests();
  return tests.map((test) => ({ id: test.id }));
}

export default async function TestPlayPage({ params }: Props) {
  const { id } = await params;
  return <TestPlayClient testId={id} />;
}
