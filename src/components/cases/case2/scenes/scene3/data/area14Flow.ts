import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseQuestionImage = require("@images/enfermera4.png");
const nurseFollowUpImage = require("@images/enfermera2.png");
const twoPointImage = require("@images/CASO_2_SEÑOR_PCP_discriminación_de_dos_puntos.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area14Flow: Record<string, Scene3AssessmentFlow> = {
  area14: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseQuestionImage,
        textKey: "case2.scene3.assessmentDialogs.area14.dialog.0",
      },
      {
        id: "1",
        speaker: "patientPcp",
        image: twoPointImage,
        textKey: "case2.scene3.assessmentDialogs.area14.dialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: nurseFollowUpImage,
        textKey: "case2.scene3.assessmentDialogs.area14.dialog.2",
      },
      {
        id: "3",
        speaker: "patientPcp",
        image: twoPointImage,
        textKey: "case2.scene3.assessmentDialogs.area14.dialog.3",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area14.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area14.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area14.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area14.quiz.0.answers.3",
            correct: true,
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area14.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area14.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area14.quiz.1.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area14.quiz.1.answers.2",
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area14.followUpDialog.0",
      },
    ],
  },
};

export default area14Flow;
