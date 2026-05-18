import type { Scene3AssessmentFlow } from "./assessmentFlow.types";

const facialMotilityImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P3_simetria_y_motilidad_facial1.png");
const facialMotilitySecondImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P3_simetria_y_motilidad_facial2.png");
const facialMotilityThirdImage = require("@images/CASO_1_SEÑOR_CJM_58_AÑOS_P3_simetria_y_motilidad_facial3.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const area3Flow: Record<string, Scene3AssessmentFlow> = {
  area3: {
    dialog: [
      { id: "0", speaker: "nurse", image: facialMotilityImage },
      { id: "1", speaker: "nurse", image: facialMotilitySecondImage },
      { id: "2", speaker: "nurse", image: facialMotilityThirdImage },
    ],
    quiz: [
      {
        id: "0",
        questionKey: "case1.scene3.assessmentDialogs.area3.quiz.0.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area3.quiz.0.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area3.quiz.0.answers.2" },
          { id: "3", textKey: "case1.scene3.assessmentDialogs.area3.quiz.0.answers.3" },
          { id: "4", textKey: "case1.scene3.assessmentDialogs.area3.quiz.0.answers.4", correct: true },
        ],
      },
      {
        id: "1",
        questionKey: "case1.scene3.assessmentDialogs.area3.quiz.1.question",
        answers: [
          { id: "1", textKey: "case1.scene3.assessmentDialogs.area3.quiz.1.answers.1" },
          { id: "2", textKey: "case1.scene3.assessmentDialogs.area3.quiz.1.answers.2", correct: true },
        ],
      },
    ],
    followUpDialog: [
      { id: "0", speaker: "nurse", image: nurseThinkingImage },
      { id: "1", speaker: "nurse", image: nurseThinkingImage },
      { id: "2", speaker: "nurse", image: nurseThinkingImage },
      { id: "3", speaker: "nurse", image: nurseThinkingImage },
    ],
  },
};

export default area3Flow;
