import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const eyeMotilityImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P2_Motilidad_extrinseca_del_ojo.png");
const eyeMotilitySecondImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P2_Motilidad_extrinseca_del_ojo2.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area2Flow: Record<string, Scene3AssessmentFlow> = {
  area2: {
    dialog: [
      { id: "0", speaker: "nurse", image: eyeMotilitySecondImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
      { id: "2", speaker: "nurse", image: eyeMotilitySecondImage },
      { id: "3", speaker: "nurse", image: eyeMotilityImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene3.assessmentDialogs.area2.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area2.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area2.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene3.assessmentDialogs.area2.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene3.assessmentDialogs.area2.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene3.assessmentDialogs.area2.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area2.quiz.1.answers.1", correct: true },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area2.quiz.1.answers.2" },
        ],
      },
      {
        id: "2",
        questionKey: "case1.scene3.assessmentDialogs.area2.quiz.2.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area2.quiz.2.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area2.quiz.2.answers.2", correct: true },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: nurseThinkingImage }],
  },
};

export default area2Flow;
