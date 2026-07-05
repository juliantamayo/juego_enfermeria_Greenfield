import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera2.png");
const armReflexImage = require("@images/CASO_2_SEÑOR_PCP_reflejo_tricipital1.gif");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const nurseConclusionImage = require("@images/enfermera3.png");

const area8Flow: Record<string, Scene3AssessmentFlow> = {
  area8: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area8.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: armReflexImage,
        textKey: "case2.scene3.assessmentDialogs.area8.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area8.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area8.quiz.0.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area8.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area8.quiz.0.answers.3",
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area8.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area8.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area8.quiz.1.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area8.quiz.1.answers.2",
            correct: true,
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area8.followUpDialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: nurseConclusionImage,
        textKey: "case2.scene3.assessmentDialogs.area8.followUpDialog.1",
      },
    ],
  },
};

export default area8Flow;
