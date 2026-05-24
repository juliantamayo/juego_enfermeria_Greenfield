import type { StyleProp, ViewStyle } from "react-native";

export interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  style?: StyleProp<ViewStyle>;
}
