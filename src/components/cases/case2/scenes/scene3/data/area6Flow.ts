import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera1.png");
const weberImage = require("@images/CASO_2_SEÑOR_PCP_Weber.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area6Flow: Record<string, Scene3AssessmentFlow> = {
  area6: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area6.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: weberImage,
        textKey: "case2.scene3.assessmentDialogs.area6.dialog.1",
      },
      {
        id: "2",
        speaker: "patientPcp",
        image: weberImage,
        textKey: "case2.scene3.assessmentDialogs.area6.dialog.2",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area6.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area6.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area6.quiz.0.answers.2",
            correct: true,
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area6.quiz.0.answers.3",
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area6.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area6.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area6.quiz.1.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area6.quiz.1.answers.2",
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
        textKey: "case2.scene3.assessmentDialogs.area6.followUpDialog.0",
      },
    ],
  },
};

export default area6Flow;
