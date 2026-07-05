import type { CaseSceneScreenName } from "./types";

type SceneConfig = {
  id: string;
  titleKey: string; // Key for i18n
  screen: CaseSceneScreenName;
};

type CaseSceneMap = {
  [caseId: string]: SceneConfig[];
};

export const CASES_SCENES: CaseSceneMap = {
  case1: [
    { id: "scene1", titleKey: "case1.scene1.title", screen: "Scene1Screen" },
    { id: "scene2", titleKey: "case1.scene2.title", screen: "Scene2Screen" },
    { id: "scene3", titleKey: "case1.scene3.title", screen: "Scene3Screen" },
    { id: "scene4", titleKey: "case1.scene4.title", screen: "Scene4Screen" },
    { id: "scene5", titleKey: "case1.scene5.title", screen: "Scene5Screen" },
    { id: "scene6", titleKey: "case1.scene6.title", screen: "Scene6Screen" },
  ],
  case2: [
    { id: "scene1", titleKey: "case2.scene1.title", screen: "Case2Scene1Screen" },
    { id: "scene2", titleKey: "case2.scene2.title", screen: "Case2Scene2Screen" },
    { id: "scene3", titleKey: "case2.scene3.title", screen: "Case2Scene3Screen" },
    { id: "scene4", titleKey: "case2.scene4.title", screen: "Case2Scene4Screen" },
    { id: "scene5", titleKey: "case2.scene5.title", screen: "Case2Scene5Screen" },
    { id: "scene6", titleKey: "case2.scene6.title", screen: "Scene6Screen" },
  ],
};
