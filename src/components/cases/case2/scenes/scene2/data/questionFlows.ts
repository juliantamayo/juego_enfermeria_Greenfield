import type { Scene2QuestionFlow } from "./questionFlow.types";
import case2Scene2Questions from "./scene2Questions";
import question1Flow from "./question1Flow";
import question2Flow from "./question2Flow";
import question3Flow from "./question3Flow";
import question4Flow from "./question4Flow";
import question5Flow from "./question5Flow";

const nurseImage = require("@images/enfermera.png");
const nurseThinkingImage = require("@images/enfermera_pensando.png");

const scene2QuestionFlows = Object.fromEntries(
  case2Scene2Questions.map(({ id }) => [
    id,
    {
      dialog: [{ id: "0", speaker: "nurse", image: nurseImage }],
      quiz: [
        {
          id: "0",
          questionKey: "case2.scene2.placeholder.quiz.question",
          answers: [
            {
              id: "1",
              textKey: "case2.scene2.placeholder.quiz.answers.continue",
              correct: true,
            },
          ],
        },
      ],
      followUpDialog: [{ id: "0", speaker: "nurse", image: nurseThinkingImage }],
    },
  ]),
) as Record<string, Scene2QuestionFlow>;

export default {
  ...scene2QuestionFlows,
  ...question1Flow,
  ...question2Flow,
  ...question3Flow,
  ...question4Flow,
  ...question5Flow,
};
