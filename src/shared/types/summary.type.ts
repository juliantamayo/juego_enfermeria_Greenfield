import type { StyleProp, ViewStyle } from "react-native";

export interface SummaryProps {
  eyebrow: string;
  title: string;
  description?: string;
  counterLabel: string;
  counterValue: number;
  style?: StyleProp<ViewStyle>;
}
