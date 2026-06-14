import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const patientPcpGreetingImage = require("@images/CASO_2_SEÑOR_PCP_saludando.png");

const question1Flow: Record<string, Scene2QuestionFlow> = {
  question1: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientPcp", image: patientPcpGreetingImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene2.questionDialogs.question1.quiz.0.question",
        answers: [
          { id: "1", textKey: "case2.scene2.questionDialogs.question1.quiz.0.answers.1" },
          { id: "2", textKey: "case2.scene2.questionDialogs.question1.quiz.0.answers.2" },
          { id: "3", textKey: "case2.scene2.questionDialogs.question1.quiz.0.answers.3" },
          { id: "4", textKey: "case2.scene2.questionDialogs.question1.quiz.0.answers.4", correct: true },
        ],
      },
    ],
    followUpDialog: [
      { id: "0", speaker: "nurse", image: nurseThinkingImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
    ],
  },
};

export default question1Flow;
