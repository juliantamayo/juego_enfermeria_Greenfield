import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const activeMobilityImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P5_movilidad_activa.gif");
const activeMobilitySecondImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P5_movilidad_activa2.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area5Flow: Record<string, Scene3AssessmentFlow> = {
  area5: {
    dialog: [
      { id: "0", speaker: "nurse", image: activeMobilityImage },
      { id: "1", speaker: "nurse", image: activeMobilitySecondImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene3.assessmentDialogs.area5.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area5.quiz.0.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area5.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene3.assessmentDialogs.area5.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene3.assessmentDialogs.area5.quiz.0.answers.4", correct: true },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene3.assessmentDialogs.area5.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area5.quiz.1.answers.1", correct: true },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area5.quiz.1.answers.2" },
        ],
      },
    ],
    followUpDialog: [
      { id: "0", speaker: "nurse", image: nurseThinkingImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
    ],
  },
};

export default area5Flow;
