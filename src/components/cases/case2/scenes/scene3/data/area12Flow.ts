import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera2.png");
const skinStimulationImage = require("@images/CASO_2_SEÑOR_PCP_estimulacion_cutanea1.gif");
const nurseConclusionImage = require("@images/enfermera3.png");

const area12Flow: Record<string, Scene3AssessmentFlow> = {
  area12: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area12.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: skinStimulationImage,
        textKey: "case2.scene3.assessmentDialogs.area12.dialog.1",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area12.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area12.quiz.0.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area12.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area12.quiz.0.answers.3",
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area12.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area12.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area12.quiz.1.answers.1",
            correct: true,
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area12.quiz.1.answers.2",
          },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseConclusionImage,
        textKey: "case2.scene3.assessmentDialogs.area12.followUpDialog.0",
      },
    ],
  },
};

export default area12Flow;
