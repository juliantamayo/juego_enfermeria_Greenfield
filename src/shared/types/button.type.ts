import type { ComponentProps } from "react";
import { TextStyle, ViewStyle, ImageSourcePropType, StyleProp } from "react-native";
import { ButtonType } from "../enums/button-type.enum";
import { Ionicons } from "@expo/vector-icons";

export interface ButtonProps {
  type?: ButtonType;
  iconName?: ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
  iconColor?: string;
  image?: ImageSourcePropType;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress: () => void;
}
