import type { Scene3AssessmentFlow } from "./assessmentFlow.types";
import scene3AssessmentAreas from "./scene3AssessmentAreas";
import area1Flow from "./area1Flow";
import area2Flow from "./area2Flow";
import area3Flow from "./area3Flow";
import area4Flow from "./area4Flow";
import area5Flow from "./area5Flow";
import area6Flow from "./area6Flow";
import area7Flow from "./area7Flow";
import area8Flow from "./area8Flow";
import area9Flow from "./area9Flow";
import area10Flow from "./area10Flow";
import area11Flow from "./area11Flow";
import area12Flow from "./area12Flow";
import area13Flow from "./area13Flow";
import area14Flow from "./area14Flow";
import area15Flow from "./area15Flow";

const nurseImage = require("@images/enfermera.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const scene3AssessmentFlows = Object.fromEntries(
  scene3AssessmentAreas.map(({ id }) => [
    id,
    {
      dialog: [
        {
          id: "0",
          speaker: "nurse",
          image: nurseImage,
          textKey: "case2.scene3.placeholder.dialog.0",
        },
      ],
      quiz: [
        {
          id: "0",
          questionKey: "case2.scene3.placeholder.quiz.question",
          answers: [
            {
              id: "1",
              textKey: "case2.scene3.placeholder.quiz.answers.continue",
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
          textKey: "case2.scene3.placeholder.followUpDialog.0",
        },
      ],
    },
  ]),
) as Record<string, Scene3AssessmentFlow>;

export default {
  ...scene3AssessmentFlows,
  ...area1Flow,
  ...area2Flow,
  ...area3Flow,
  ...area4Flow,
  ...area5Flow,
  ...area6Flow,
  ...area7Flow,
  ...area8Flow,
  ...area9Flow,
  ...area10Flow,
  ...area11Flow,
  ...area12Flow,
  ...area13Flow,
  ...area14Flow,
  ...area15Flow,
};
