import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const sensitivityImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P7_sensibilidad1.png");
const sensitivitySecondImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P7_sensibilidad2.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area7Flow: Record<string, Scene3AssessmentFlow> = {
  area7: {
    dialog: [
      { id: "0", speaker: "nurse", image: sensitivityImage },
      { id: "1", speaker: "patientCjm", image: sensitivityImage },
      { id: "2", speaker: "nurse", image: sensitivitySecondImage },
      { id: "3", speaker: "patientCjm", image: sensitivitySecondImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene3.assessmentDialogs.area7.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area7.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area7.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene3.assessmentDialogs.area7.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene3.assessmentDialogs.area7.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene3.assessmentDialogs.area7.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area7.quiz.1.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area7.quiz.1.answers.2", correct: true },
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

export default area7Flow;
