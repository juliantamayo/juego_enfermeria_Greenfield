import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera.png");
const nurseConfirmingImage = require("@images/enfermera3.png");
const nurseAskingImage = require("@images/enfermera2.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const patientPcpJudgmentImage = require("@images/CASO_2_SEÑOR_PCP_juicio.png");
const patientPcpMemoryImage = require("@images/CASO_2_SEÑOR_PCP_memoria.png");

const question2Flow: Record<string, Scene2QuestionFlow> = {
  question2: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientPcp", image: patientPcpJudgmentImage },
      { id: "2", speaker: "patientPcp", image: patientPcpJudgmentImage },
      { id: "3", speaker: "nurse", image: nurseConfirmingImage },
      { id: "4", speaker: "nurse", image: nurseAskingImage },
      { id: "5", speaker: "patientPcp", image: patientPcpMemoryImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene2.questionDialogs.question2.quiz.0.question",
        answers: [
          { id: "1", textKey: "case2.scene2.questionDialogs.question2.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case2.scene2.questionDialogs.question2.quiz.0.answers.2" },
          { id: "3", textKey: "case2.scene2.questionDialogs.question2.quiz.0.answers.3" },
          { id: "4", textKey: "case2.scene2.questionDialogs.question2.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene2.questionDialogs.question2.quiz.1.question",
        answers: [
          { id: "1", textKey: "case2.scene2.questionDialogs.question2.quiz.1.answers.1" },
          { id: "2", textKey: "case2.scene2.questionDialogs.question2.quiz.1.answers.2", correct: true },
          { id: "3", textKey: "case2.scene2.questionDialogs.question2.quiz.1.answers.3" },
          { id: "4", textKey: "case2.scene2.questionDialogs.question2.quiz.1.answers.4" },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: nurseThinkingImage }],
  },
};

export default question2Flow;
