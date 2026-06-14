import type { ImageSourcePropType } from "react-native";

export type Scene2QuestionDialogEntry = {
  id: string;
  speaker: "nurse" | "patientPcp";
  image: ImageSourcePropType;
};

export type Scene2QuestionQuizAnswer = {
  id: string;
  textKey: string;
  correct?: boolean;
};

export type Scene2QuestionQuizEntry = {
  id: string;
  questionKey: string;
  answers: Scene2QuestionQuizAnswer[];
};

export type Scene2QuestionFlow = {
  dialog: Scene2QuestionDialogEntry[];
  quiz: Scene2QuestionQuizEntry[];
  followUpDialog?: Scene2QuestionDialogEntry[];
};
