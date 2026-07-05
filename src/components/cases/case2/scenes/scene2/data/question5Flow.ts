import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const patientPcpImage = require("@images/CASO_2_SEÑOR_PCP.png");

const question5Flow: Record<string, Scene2QuestionFlow> = {
  question5: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientPcp", image: patientPcpImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene2.questionDialogs.question5.quiz.0.question",
        answers: [
          { id: "1", textKey: "case2.scene2.questionDialogs.question5.quiz.0.answers.1" },
          { id: "2", textKey: "case2.scene2.questionDialogs.question5.quiz.0.answers.2" },
          { id: "3", textKey: "case2.scene2.questionDialogs.question5.quiz.0.answers.3", correct: true },
          { id: "4", textKey: "case2.scene2.questionDialogs.question5.quiz.0.answers.4" },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: nurseThinkingImage }],
  },
};

export default question5Flow;
