import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera1.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const patientCjmImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_confundido.png");

const question5Flow: Record<string, Scene2QuestionFlow> = {
  question5: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientCjm", image: patientCjmImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene2.questionDialogs.question5.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question5.quiz.0.answers.1" },
          { id: "2", textKey: "case1.scene2.questionDialogs.question5.quiz.0.answers.2", correct: true },
          { id: "3", textKey: "case1.scene2.questionDialogs.question5.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene2.questionDialogs.question5.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene2.questionDialogs.question5.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question5.quiz.1.answers.1" },
          { id: "2", textKey: "case1.scene2.questionDialogs.question5.quiz.1.answers.2", correct: true },
          { id: "3", textKey: "case1.scene2.questionDialogs.question5.quiz.1.answers.3" },
          { id: "4", textKey: "case1.scene2.questionDialogs.question5.quiz.1.answers.4" },
        ],
      },
      {
        id: "2",
        questionKey: "case1.scene2.questionDialogs.question5.quiz.2.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question5.quiz.2.answers.1" },
          { id: "2", textKey: "case1.scene2.questionDialogs.question5.quiz.2.answers.2" },
          { id: "3", textKey: "case1.scene2.questionDialogs.question5.quiz.2.answers.3", correct: true },
          { id: "4", textKey: "case1.scene2.questionDialogs.question5.quiz.2.answers.4" },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: nurseThinkingImage }],
  },
};

export default question5Flow;
