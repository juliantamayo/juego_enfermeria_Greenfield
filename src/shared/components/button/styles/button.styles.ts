import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonType } from "../../../enums/button-type.enum";
import { Colors, Radius, Spacing } from "@styles-theme";

const baseStyles = StyleSheet.create({
  button: {
    padding: Spacing.md,
    borderRadius: Radius.md,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

type VariantStyles = {
  button: ViewStyle;
  text: TextStyle;
};

const buttonVariants: Record<ButtonType, VariantStyles> = {
  [ButtonType.PRIMARY]: StyleSheet.create({
    button: { backgroundColor: Colors.backgroundButton.primary },
    text: { color: "#fff" },
  }),
  [ButtonType.SECONDARY]: StyleSheet.create({
    button: { backgroundColor: "#aaa" },
    text: { color: "#000" },
  }),
  [ButtonType.ACTION]: StyleSheet.create({
    button: { backgroundColor: "#fbe122" },
    text: { color: "blue" },
  }),
  [ButtonType.IMAGE]: StyleSheet.create({
    button: {
      backgroundColor: "transparent",
      padding: 0,
    },
    text: {},
  }),
};

export { baseStyles, buttonVariants };
