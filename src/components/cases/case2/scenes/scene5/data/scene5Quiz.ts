export type Scene5QuizAnswer = {
  id: string;
  textKey: string;
  correct?: boolean;
};

export type Scene5QuizQuestion = {
  id: string;
  questionKey: string;
  answers: Scene5QuizAnswer[];
};

const scene5Quiz: Scene5QuizQuestion[] = [
  {
    id: "question1",
    questionKey: "case2.scene5.quiz.question1.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question1.answers.1" },
      { id: "2", textKey: "case2.scene5.quiz.question1.answers.2", correct: true },
      { id: "3", textKey: "case2.scene5.quiz.question1.answers.3" },
      { id: "4", textKey: "case2.scene5.quiz.question1.answers.4" },
    ],
  },
  {
    id: "question2",
    questionKey: "case2.scene5.quiz.question2.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question2.answers.1" },
      { id: "2", textKey: "case2.scene5.quiz.question2.answers.2" },
      { id: "3", textKey: "case2.scene5.quiz.question2.answers.3" },
      { id: "4", textKey: "case2.scene5.quiz.question2.answers.4", correct: true },
    ],
  },
  {
    id: "question3",
    questionKey: "case2.scene5.quiz.question3.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question3.answers.1", correct: true },
      { id: "2", textKey: "case2.scene5.quiz.question3.answers.2" },
      { id: "3", textKey: "case2.scene5.quiz.question3.answers.3" },
      { id: "4", textKey: "case2.scene5.quiz.question3.answers.4" },
    ],
  },
  {
    id: "question4",
    questionKey: "case2.scene5.quiz.question4.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question4.answers.1" },
      { id: "2", textKey: "case2.scene5.quiz.question4.answers.2" },
      { id: "3", textKey: "case2.scene5.quiz.question4.answers.3", correct: true },
      { id: "4", textKey: "case2.scene5.quiz.question4.answers.4" },
    ],
  },
  {
    id: "question5",
    questionKey: "case2.scene5.quiz.question5.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question5.answers.1" },
      { id: "2", textKey: "case2.scene5.quiz.question5.answers.2", correct: true },
      { id: "3", textKey: "case2.scene5.quiz.question5.answers.3" },
      { id: "4", textKey: "case2.scene5.quiz.question5.answers.4" },
    ],
  },
  {
    id: "question6",
    questionKey: "case2.scene5.quiz.question6.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question6.answers.1" },
      { id: "2", textKey: "case2.scene5.quiz.question6.answers.2" },
      { id: "3", textKey: "case2.scene5.quiz.question6.answers.3", correct: true },
      { id: "4", textKey: "case2.scene5.quiz.question6.answers.4" },
    ],
  },
  {
    id: "question7",
    questionKey: "case2.scene5.quiz.question7.question",
    answers: [
      { id: "1", textKey: "case2.scene5.quiz.question7.answers.1" },
      { id: "2", textKey: "case2.scene5.quiz.question7.answers.2", correct: true },
      { id: "3", textKey: "case2.scene5.quiz.question7.answers.3" },
      { id: "4", textKey: "case2.scene5.quiz.question7.answers.4" },
    ],
  },
];

export default scene5Quiz;
