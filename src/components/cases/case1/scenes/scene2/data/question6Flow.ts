import type { Scene2QuestionFlow } from "./questionFlow.types";

const nurseImage = require("@images/enfermera3.png");
const lovettScaleImage = require("@images/escala_lovett.png");
const patientCjmRaisingArmImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_levantando_brazo.png");

const question6Flow: Record<string, Scene2QuestionFlow> = {
  question6: {
    dialog: [
      { id: "0", speaker: "nurse", image: nurseImage },
      { id: "1", speaker: "nurse", image: patientCjmRaisingArmImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene2.questionDialogs.question6.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene2.questionDialogs.question6.quiz.0.answers.1", correct: true },
          { id: "2", textKey: "case1.scene2.questionDialogs.question6.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene2.questionDialogs.question6.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene2.questionDialogs.question6.quiz.0.answers.4" },
        ],
      },
    ],
    followUpDialog: [{ id: "0", speaker: "nurse", image: lovettScaleImage }],
  },
};

export default question6Flow;
