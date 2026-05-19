import type { StyleProp, ViewStyle } from "react-native";
import { CheckboxOptionStatus } from "@shared/enums/checkbox-option-status.enum";

export interface CheckboxOptionProps {
  label: string;
  selected?: boolean;
  status?: CheckboxOptionStatus;
  feedback?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
