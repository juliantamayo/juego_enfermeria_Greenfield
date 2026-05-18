import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const walkingImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_caminar.gif");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area6Flow: Record<string, Scene3AssessmentFlow> = {
  area6: {
    dialog: [{ id: "0", speaker: "nurse", image: walkingImage }],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene3.assessmentDialogs.area6.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area6.quiz.0.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area6.quiz.0.answers.2", correct: true },
          { id: "3", textKey: "case1.scene3.assessmentDialogs.area6.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene3.assessmentDialogs.area6.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene3.assessmentDialogs.area6.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area6.quiz.1.answers.1", correct: true },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area6.quiz.1.answers.2" },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: nurseThinkingImage }],
  },
};

export default area6Flow;
