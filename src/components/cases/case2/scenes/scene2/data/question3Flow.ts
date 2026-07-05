import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera.png");
const nurseAskingImage = require("@images/enfermera2.png");
const nurseMemoryQuestionImage = require("@images/enfermera3.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const patientPcpAffectImage = require("@images/CASO_2_SEÑOR_PCP_afecto.png");
const patientPcpMemoryImage = require("@images/CASO_2_SEÑOR_PCP_memoria.png");

const question3Flow: Record<string, Scene2QuestionFlow> = {
  question3: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientPcp", image: patientPcpAffectImage },
      { id: "2", speaker: "nurse", image: nurseAskingImage },
      { id: "3", speaker: "patientPcp", image: patientPcpMemoryImage },
      { id: "4", speaker: "nurse", image: nurseMemoryQuestionImage },
      { id: "5", speaker: "patientPcp", image: patientPcpMemoryImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene2.questionDialogs.question3.quiz.0.question",
        answers: [
          { id: "1", textKey: "case2.scene2.questionDialogs.question3.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case2.scene2.questionDialogs.question3.quiz.0.answers.2" },
          { id: "3", textKey: "case2.scene2.questionDialogs.question3.quiz.0.answers.3" },
          { id: "4", textKey: "case2.scene2.questionDialogs.question3.quiz.0.answers.4" },
        ],
      },
    ],
    followUpDialog: [
      { id: "0", speaker: "nurse", image: nurseThinkingImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
    ],
  },
};

export default question3Flow;
