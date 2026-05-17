import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera4.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const patientCjmRightArmImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_enfermero_levanta_brazo_derecho.png");
const patientCjmLeftArmImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_enfermero_levanta_brazo_izquierdo.png");

const question7Flow: Record<string, Scene2QuestionFlow> = {
  question7: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "patientCjm", image: patientCjmRightArmImage },
      { id: "2", speaker: "patientCjm", image: patientCjmLeftArmImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene2.questionDialogs.question7.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question7.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case1.scene2.questionDialogs.question7.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene2.questionDialogs.question7.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene2.questionDialogs.question7.quiz.0.answers.4" },
        ],
      },
    ],
    followUpDialog: [
      { id: "0", speaker: "nurse", image: nurseThinkingImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
      { id: "2", speaker: "nurse", image: nurseThinkingImage },
    ],
  },
};

export default question7Flow;
