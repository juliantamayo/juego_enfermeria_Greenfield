import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera4.png");
const objectRecognitionImage = require("@images/CASO_2_SEÑOR_PCP_ESTEREOGNOSIA.png");
const nurseConclusionImage = require("@images/enfermera3.png");

const area15Flow: Record<string, Scene3AssessmentFlow> = {
  area15: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area15.dialog.0",
      },
      {
        id: "1",
        speaker: "patientPcp",
        image: objectRecognitionImage,
        textKey: "case2.scene3.assessmentDialogs.area15.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area15.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area15.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area15.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area15.quiz.0.answers.3",
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area15.quiz.0.answers.4",
            correct: true,
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area15.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area15.quiz.1.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area15.quiz.1.answers.2",
            correct: true,
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseConclusionImage,
        textKey: "case2.scene3.assessmentDialogs.area15.followUpDialog.0",
      },
    ],
  },
};

export default area15Flow;
