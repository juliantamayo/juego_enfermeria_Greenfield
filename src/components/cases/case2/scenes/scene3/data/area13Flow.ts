import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera1.png");
const plantarReflexImage = require("@images/CASO_2_SEÑOR_PCP_reflejo_plantar.gif");
const nurseConclusionImage = require("@images/enfermera3.png");

const area13Flow: Record<string, Scene3AssessmentFlow> = {
  area13: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area13.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: plantarReflexImage,
        textKey: "case2.scene3.assessmentDialogs.area13.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area13.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area13.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area13.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area13.quiz.0.answers.3",
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area13.quiz.0.answers.4",
            correct: true,
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area13.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area13.quiz.1.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area13.quiz.1.answers.2",
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseConclusionImage,
        textKey: "case2.scene3.assessmentDialogs.area13.followUpDialog.0",
      },
    ],
  },
};

export default area13Flow;
