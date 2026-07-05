import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const rinneImage = require("@images/CASO_2_SEÑOR_PCP_Rinne.gif");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const nurseConclusionImage = require("@images/enfermera3.png");

const area5Flow: Record<string, Scene3AssessmentFlow> = {
  area5: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: rinneImage,
        textKey: "case2.scene3.assessmentDialogs.area5.dialog.0",
      },
      {
        id: "1",
        speaker: "patientPcp",
        image: rinneImage,
        textKey: "case2.scene3.assessmentDialogs.area5.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area5.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area5.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area5.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area5.quiz.0.answers.3",
            correct: true,
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area5.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area5.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area5.quiz.1.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area5.quiz.1.answers.2",
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area5.followUpDialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area5.followUpDialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: nurseConclusionImage,
        textKey: "case2.scene3.assessmentDialogs.area5.followUpDialog.2",
      },
    ],
  },
};

export default area5Flow;
