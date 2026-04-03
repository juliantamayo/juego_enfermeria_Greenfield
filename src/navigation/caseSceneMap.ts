import type { RootStackParamList } from "./types";

type SceneConfig = {
  id: string;
  titleKey: string; // Key for i18n
  screen: keyof RootStackParamList;
};

type CaseSceneMap = {
  [caseId: string]: SceneConfig[];
};

export const CASES_SCENES: CaseSceneMap = {
  case1: [
    { id: "scene1", titleKey: "case1.scene1.title", screen: "Scene1Screen" },
    { id: "scene2", titleKey: "case1.scene2", screen: "Scene2Screen" },
    { id: "scene3", titleKey: "case1.scene3", screen: "Scene3Screen" },
    //     { id: "scene4", titleKey: "case1.scene4", screen: "Scene4Screen" },
    //     { id: "scene5", titleKey: "case1.scene5", screen: "Scene5Screen" },
    //   ],
    //   case2: [
    //     { id: "scene1", titleKey: "cases.case2.scene1", screen: "Scene1Case2" },
  ],
};
