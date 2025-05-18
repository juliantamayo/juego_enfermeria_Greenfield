// This file centralizes the screen definitions for the app's root stack navigator.
// Each screen is linked with its component and optional navigation options.
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";

import HomeScreen from "@components/home/home.screen";
import SettingsScreen from "@components/settings/settings.screen";

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
];
