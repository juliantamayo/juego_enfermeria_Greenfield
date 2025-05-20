// This file centralizes the screen definitions for the app's root stack navigator.
// Each screen is linked with its component and optional navigation options.
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";

import HomeScreen from "@components/home/home.screen";
import SettingsScreen from "@components/settings/settings.screen";
import CaseMenuScreen from "@components/cases/caseMenu.screen";
import Case1MenuScreen from "@components/cases/case1/Case1Menu.screen";
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
  },
  {
    name: "Case2Menu",
    component: Case2MenuScreen,
  },
  {
    name: "Case3Menu",
    component: Case2MenuScreen,
  },
];
