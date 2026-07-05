// This type defines the available screens in the root navigation stack.
// It is used for type-safe navigation with React Navigation.

export type CaseMenuScreenName = "Case1Menu" | "Case2Menu" | "Case3Menu";
export type CaseSceneScreenName =
  | "Scene1Screen"
  | "Scene2Screen"
  | "Scene3Screen"
  | "Scene4Screen"
  | "Scene5Screen"
  | "Scene6Screen"
  | "Case2Scene1Screen"
  | "Case2Scene2Screen"
  | "Case2Scene3Screen"
  | "Case2Scene4Screen"
  | "Case2Scene5Screen";
export type SceneCompleteReturnScreenName =
  | CaseMenuScreenName
  | "Scene2Screen"
  | "Scene3Screen"
  | "Scene4Screen"
  | "Case2Scene2Screen"
  | "Case2Scene3Screen"
  | "Case2Scene4Screen"
  | "Case2Scene5Screen";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  CaseMenu: undefined;
  Case1Menu: undefined;
  Case2Menu: undefined;
  Case3Menu: undefined;
  SceneCompleteScreen: {
    caseId: string;
    completedSceneId: string;
    nextSceneId?: string;
    returnScreen: SceneCompleteReturnScreenName;
  };
  Scene1Screen: undefined;
  Scene2Screen: undefined;
  Scene2QuestionFlowScreen: {
    questionId: string;
  };
  Scene3Screen: undefined;
  Scene3AssessmentFlowScreen: {
    assessmentId: string;
  };
  Scene4Screen: undefined;
  Scene5Screen: undefined;
  Scene6Screen: undefined;
  Case2Scene1Screen: undefined;
  Case2Scene2Screen: undefined;
  Case2Scene3Screen: undefined;
  Case2Scene4Screen: undefined;
  Case2Scene5Screen: undefined;
  Case2Scene3AssessmentFlowScreen: {
    assessmentId: string;
  };
  Case2Scene2QuestionFlowScreen: {
    questionId: string;
  };
};
