import type { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

export interface SafeScrollViewProps extends Omit<ScrollViewProps, "contentContainerStyle"> {
  bottomOffset?: number;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
