import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const patientVisionImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P1_vision_paciente.png");
const confrontationVisualFieldImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P1_Campimetria_por_confrontacion.png");
const patientRealVisionImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P1_vision_real_paciente.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area1Flow: Record<string, Scene3AssessmentFlow> = {
  area1: {
    dialog: [
      { id: "0", speaker: "nurse", image: patientVisionImage },
      { id: "1", speaker: "nurse", image: confrontationVisualFieldImage },
      { id: "2", speaker: "nurse", image: patientRealVisionImage },
      { id: "3", speaker: "nurse", image: patientRealVisionImage },
      { id: "4", speaker: "nurse", image: patientRealVisionImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene3.assessmentDialogs.area1.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area1.quiz.0.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area1.quiz.0.answers.2", correct: true },
          { id: "3", textKey: "case1.scene3.assessmentDialogs.area1.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene3.assessmentDialogs.area1.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene3.assessmentDialogs.area1.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area1.quiz.1.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area1.quiz.1.answers.2", correct: true },
        ],
      },
    ],
    followUpDialog: [
      { id: "0", speaker: "nurse", image: nurseThinkingImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
    ],
  },
};

export default area1Flow;
