import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const nurseThermalQuestionImage = require("@images/enfermera3.png");
const nurseSecondQuestionImage = require("@images/enfermera2.png");
const nurseTactileAssessmentImage = require("@images/enfermera1.png");
const coldSensitivityImage = require("@images/CASO_2_SEÑOR_PCP_sens_termica1.png");
const warmSensitivityImage = require("@images/CASO_2_SEÑOR_PCP_sens_termica2.png");
const tactileSensitivityImage = require("@images/CASO_2_SEÑOR_PCP_sensibilidad_tactil.gif");
const sneezeResponseImage = require("@images/CASO_2_SEÑOR_PCP_sensibilidad_tactil_estornudo1.gif");
const nurseThinkingImage = require("@images/enfermera_pensando.png");
const nurseConclusionImage = require("@images/enfermera3.png");

const area2Flow: Record<string, Scene3AssessmentFlow> = {
  area2: {
    dialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThermalQuestionImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.0",
      },
      {
        id: "1",
        speaker: "patientPcp",
        image: coldSensitivityImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: nurseSecondQuestionImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.2",
      },
      {
        id: "3",
        speaker: "patientPcp",
        image: warmSensitivityImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.3",
      },
      {
        id: "4",
        speaker: "nurse",
        image: nurseTactileAssessmentImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.4",
      },
      {
        id: "5",
        speaker: "nurse",
        image: tactileSensitivityImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.5",
      },
      {
        id: "6",
        speaker: "nurse",
        image: nurseThermalQuestionImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.6",
      },
      {
        id: "7",
        speaker: "nurse",
        image: sneezeResponseImage,
        textKey: "case2.scene3.assessmentDialogs.area2.dialog.7",
      },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case2.scene3.assessmentDialogs.area2.quiz.0.question",
        answers: [
          { id: "1", textKey: "case2.scene3.assessmentDialogs.area2.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case2.scene3.assessmentDialogs.area2.quiz.0.answers.2" },
          { id: "3", textKey: "case2.scene3.assessmentDialogs.area2.quiz.0.answers.3" },
          { id: "4", textKey: "case2.scene3.assessmentDialogs.area2.quiz.0.answers.4" },
        ],
      },
      {
        id: "1",
        questionKey: "case2.scene3.assessmentDialogs.area2.quiz.1.question",
        answers: [
          { id: "1", textKey: "case2.scene3.assessmentDialogs.area2.quiz.1.answers.1" },
          { id: "2", textKey: "case2.scene3.assessmentDialogs.area2.quiz.1.answers.2", correct: true },
          { id: "3", textKey: "case2.scene3.assessmentDialogs.area2.quiz.1.answers.3" },
          { id: "4", textKey: "case2.scene3.assessmentDialogs.area2.quiz.1.answers.4" },
        ],
      },
    ],
    followUpDialog: [
      {
        id: "0",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area2.followUpDialog.0",
      },
      {
        id: "1",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area2.followUpDialog.1",
      },
      {
        id: "2",
        speaker: "nurse",
        image: nurseThinkingImage,
        textKey: "case2.scene3.assessmentDialogs.area2.followUpDialog.2",
      },
      {
        id: "3",
        speaker: "nurse",
        image: nurseConclusionImage,
        textKey: "case2.scene3.assessmentDialogs.area2.followUpDialog.3",
      },
    ],
  },
};

export default area2Flow;
