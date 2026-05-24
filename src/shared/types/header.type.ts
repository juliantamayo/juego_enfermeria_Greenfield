import type { ComponentProps } from "react";
import type { ImageSourcePropType, ViewStyle } from "react-native";
import type { Ionicons } from "@expo/vector-icons";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

export interface HeaderButton {
  iconName?: IoniconsName;
  iconSize?: number;
  iconColor?: string;
  img?: ImageSourcePropType;
  onPress: () => void;
}

export interface HeaderProps {
  leftButtons?: HeaderButton[];
  rightButtons?: HeaderButton[];
  style?: ViewStyle;
}
