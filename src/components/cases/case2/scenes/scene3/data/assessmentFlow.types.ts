import type { ImageSourcePropType } from "react-native";

export type Scene3AssessmentDialogEntry = {
  id: string;
  speaker: "nurse" | "patientPcp" | "patientCjm";
  image: ImageSourcePropType;
  textKey?: string;
};

export type Scene3AssessmentQuizAnswer = {
  id: string;
  textKey: string;
  correct?: boolean;
};

export type Scene3AssessmentQuizEntry = {
  id: string;
  questionKey: string;
  answers: Scene3AssessmentQuizAnswer[];
};

export type Scene3AssessmentFlow = {
  dialog: Scene3AssessmentDialogEntry[];
  quiz: Scene3AssessmentQuizEntry[];
  followUpDialog?: Scene3AssessmentDialogEntry[];
};
