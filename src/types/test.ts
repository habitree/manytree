export interface TestOption {
  text: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  text: string;
  image?: string;
  options: TestOption[];
}

export interface Result {
  id: string;
  title: string;
  description: string;
  image: string;
  emoji?: string;
  tags?: string[];
}

export interface Test {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  color?: string;
  emoji?: string;
  questions: Question[];
  results: Result[];
}

export interface TestSummary {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  color?: string;
  emoji?: string;
  questionCount: number;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
  scores: Record<string, number>;
}

export interface TestProgress {
  testId: string;
  currentQuestion: number;
  answers: UserAnswer[];
}

export interface TestResult {
  testId: string;
  resultId: string;
  scores: Record<string, number>;
  completedAt: string;
}
