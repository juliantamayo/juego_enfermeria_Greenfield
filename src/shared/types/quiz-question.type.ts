export type QuizQuestionAnswer = {
  id: string;
  text: string;
  correct?: boolean;
};

export interface QuizQuestionProps {
  question: string;
  instruction: string;
  answers: QuizQuestionAnswer[];
  disabled?: boolean;
  onAnswerPress: (answer: QuizQuestionAnswer) => void;
}
