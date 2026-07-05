import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const tongueProtrusionImage = require("@images/CASO_2_SEÑOR_PCP_trofismo2.png");
const tongueStrengthImage = require("@images/CASO_2_SEÑOR_PCP_trofismo.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area4Flow: Record<string, Scene3AssessmentFlow> = {
  area4: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: tongueProtrusionImage,
        textKey: "case2.scene3.assessmentDialogs.area4.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: tongueStrengthImage,
        textKey: "case2.scene3.assessmentDialogs.area4.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area4.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.0.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.0.answers.3",
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area4.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.1.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.1.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area4.quiz.1.answers.3",
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
        textKey: "case2.scene3.assessmentDialogs.area4.followUpDialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area4.followUpDialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area4.followUpDialog.2",
      },
    ],
  },
};

export default area4Flow;
