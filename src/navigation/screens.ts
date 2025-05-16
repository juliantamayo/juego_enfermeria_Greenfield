import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

import HomeScreen from '@components/home/home.screen';
import SettingsScreen from '@components/settings/settings.screen';

type ScreenEntry = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

export const screens: ScreenEntry[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Settings',
    component: SettingsScreen,
  },
];
