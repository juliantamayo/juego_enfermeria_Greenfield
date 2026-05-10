import type { ImageSourcePropType } from "react-native";

export type Scene2QuestionDialogEntry = {
  id: string;
  speaker: "nurse" | "patientCjm";
  image: ImageSourcePropType;
};

export type Scene2QuestionQuizAnswer = {
  id: string;
  textKey: string;
  correct?: boolean;
};

export type Scene2QuestionQuizEntry = {
  id: string;
  questionKey: string;
  answers: Scene2QuestionQuizAnswer[];
};

export type Scene2QuestionFlow = {
  dialog: Scene2QuestionDialogEntry[];
  quiz: Scene2QuestionQuizEntry[];
  followUpDialog?: Scene2QuestionDialogEntry[];
};

const nurseImage = require("@images/enfermera.png");
const patientCjmImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS.png");

const scene2QuestionDialogs: Record<string, Scene2QuestionFlow> = {
  question1: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientCjm", image: patientCjmImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene2.questionDialogs.question1.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question1.quiz.0.answers.1" },
          { id: "2", textKey: "case1.scene2.questionDialogs.question1.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene2.questionDialogs.question1.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene2.questionDialogs.question1.quiz.0.answers.4", correct: true },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene2.questionDialogs.question1.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question1.quiz.1.answers.1" },
          { id: "2", textKey: "case1.scene2.questionDialogs.question1.quiz.1.answers.2" },
          { id: "3", textKey: "case1.scene2.questionDialogs.question1.quiz.1.answers.3", correct: true },
          { id: "4", textKey: "case1.scene2.questionDialogs.question1.quiz.1.answers.4" },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: nurseImage }],
  },
};

export default scene2QuestionDialogs;
