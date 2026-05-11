// This file centralizes the screen definitions for the app's root stack navigator.
// Each screen is linked with its component and optional navigation options.
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";

import HomeScreen from "@components/home/home.screen";
import SettingsScreen from "@components/settings/settings.screen";
import CaseMenuScreen from "@components/cases/caseMenu.screen";
import Case1MenuScreen from "@components/cases/case1/Case1Menu.screen";
import SceneCompleteScreen from "@components/cases/SceneComplete.screen";
import Scene1Screen from "@components/cases/case1/scenes/scene1/Scene1.screen";
import Scene2Screen from "@components/cases/case1/scenes/scene2/Scene2.screen";
import Scene2Question1FlowScreen from "@components/cases/case1/scenes/scene2/Scene2Question1Flow.screen";
import Scene2Question2FlowScreen from "@components/cases/case1/scenes/scene2/Scene2Question2Flow.screen";
import Scene2Question3FlowScreen from "@components/cases/case1/scenes/scene2/Scene2Question3Flow.screen";
import Scene3Screen from "@components/cases/case1/Scene3.screen";
import Scene4Screen from "@components/cases/case1/scenes/scene4/Scene4.screen";
import Scene5Screen from "@components/cases/case1/scenes/scene5/Scene5.screen";
import Scene6Screen from "@components/cases/case1/scenes/scene6/Scene6.screen";
import Case2MenuScreen from "@components/cases/case2/Case2Menu.screen";
import Case3MenuScreen from "@components/cases/case3/Case3Menu.screen";

// Defines the structure for each screen entry used in the navigation stack.
type ScreenEntry = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

export const screens: ScreenEntry[] = [
  {
    name: "Home",
    component: HomeScreen,
  },
  {
    name: "Settings",
    component: SettingsScreen,
  },
  {
    name: "CaseMenu",
    component: CaseMenuScreen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Case1Menu",
    component: Case1MenuScreen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Case2Menu",
    component: Case2MenuScreen,
  },
  {
    name: "Case3Menu",
    component: Case2MenuScreen,
  },
  {
    name: "Scene1Screen",
    component: Scene1Screen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "SceneCompleteScreen",
    component: SceneCompleteScreen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene2Screen",
    component: Scene2Screen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene2Question1FlowScreen",
    component: Scene2Question1FlowScreen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene2Question2FlowScreen",
    component: Scene2Question2FlowScreen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene2Question3FlowScreen",
    component: Scene2Question3FlowScreen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene3Screen",
    component: Scene3Screen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene4Screen",
    component: Scene4Screen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene5Screen",
    component: Scene5Screen,
    options: {
      headerBackVisible: false,
    },
  },
  {
    name: "Scene6Screen",
    component: Scene6Screen,
    options: {
      headerBackVisible: false,
    },
  },
];
