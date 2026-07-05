import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const smellAssessmentImage = require("@images/CASO_2_SEÑOR_PCP_olores.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area1Flow: Record<string, Scene3AssessmentFlow> = {
  area1: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: smellAssessmentImage,
        textKey: "case2.scene3.assessmentDialogs.area1.dialog.0",
      },
      {
        id: "1",
        speaker: "patientPcp",
        image: smellAssessmentImage,
        textKey: "case2.scene3.assessmentDialogs.area1.dialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: smellAssessmentImage,
        textKey: "case2.scene3.assessmentDialogs.area1.dialog.2",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area1.quiz.0.question",
        answers: [
          { id: "1", textKey: "case2.scene3.assessmentDialogs.area1.quiz.0.answers.1" },
          { id: "2", textKey: "case2.scene3.assessmentDialogs.area1.quiz.0.answers.2" },
          { id: "3", textKey: "case2.scene3.assessmentDialogs.area1.quiz.0.answers.3" },
          { id: "4", textKey: "case2.scene3.assessmentDialogs.area1.quiz.0.answers.4", correct: true },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area1.quiz.1.question",
        answers: [
          { id: "1", textKey: "case2.scene3.assessmentDialogs.area1.quiz.1.answers.1", correct: true },
          { id: "2", textKey: "case2.scene3.assessmentDialogs.area1.quiz.1.answers.2" },
        ],
      },
      {
        id: "2",
        questionKey: "case2.scene3.assessmentDialogs.area1.quiz.2.question",
        answers: [
          { id: "1", textKey: "case2.scene3.assessmentDialogs.area1.quiz.2.answers.1" },
          { id: "2", textKey: "case2.scene3.assessmentDialogs.area1.quiz.2.answers.2" },
          { id: "3", textKey: "case2.scene3.assessmentDialogs.area1.quiz.2.answers.3" },
          { id: "4", textKey: "case2.scene3.assessmentDialogs.area1.quiz.2.answers.4", correct: true },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area1.followUpDialog.0",
      },
    ],
  },
};

export default area1Flow;
