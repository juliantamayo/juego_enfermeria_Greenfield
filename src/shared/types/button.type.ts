import { TextStyle, ViewStyle, ImageSourcePropType } from "react-native";
import { ButtonType } from "../enums/button-type.enum";
import { Ionicons } from "@expo/vector-icons";

export interface ButtonProps {
  type?: ButtonType;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
  iconColor?: string;
  image?: ImageSourcePropType;
  text?: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
}
