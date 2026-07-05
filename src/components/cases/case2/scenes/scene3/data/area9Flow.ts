import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera2.png");
const armReflexImage = require("@images/CASO_2_SEÑOR_PCP_reflejo_supinador1.gif");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area9Flow: Record<string, Scene3AssessmentFlow> = {
  area9: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area9.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: armReflexImage,
        textKey: "case2.scene3.assessmentDialogs.area9.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area9.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area9.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area9.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area9.quiz.0.answers.3",
            correct: true,
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area9.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area9.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area9.quiz.1.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area9.quiz.1.answers.2",
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area9.followUpDialog.0",
      },
    ],
  },
};

export default area9Flow;
