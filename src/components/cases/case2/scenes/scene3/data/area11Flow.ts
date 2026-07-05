import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseImage = require("@images/enfermera1.png");
const cautionNurseImage = require("@images/enfermera4.png");
const ankleReflexImage = require("@images/CASO_2_SEÑOR_PCP_reflejo_aquileo1.gif");
const nurseConclusionImage = require("@images/enfermera3.png");

const area11Flow: Record<string, Scene3AssessmentFlow> = {
  area11: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseImage,
        textKey: "case2.scene3.assessmentDialogs.area11.dialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: cautionNurseImage,
        textKey: "case2.scene3.assessmentDialogs.area11.dialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: ankleReflexImage,
        textKey: "case2.scene3.assessmentDialogs.area11.dialog.2",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area11.quiz.0.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area11.quiz.0.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area11.quiz.0.answers.2",
          },
          {
            id: "3",
            textKey: "case2.scene3.assessmentDialogs.area11.quiz.0.answers.3",
            correct: true,
          },
          {
            id: "4",
            textKey: "case2.scene3.assessmentDialogs.area11.quiz.0.answers.4",
          },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area11.quiz.1.question",
        answers: [
          {
            id: "1",
            textKey: "case2.scene3.assessmentDialogs.area11.quiz.1.answers.1",
          },
          {
            id: "2",
            textKey: "case2.scene3.assessmentDialogs.area11.quiz.1.answers.2",
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
        textKey: "case2.scene3.assessmentDialogs.area11.followUpDialog.0",
      },
    ],
  },
};

export default area11Flow;
