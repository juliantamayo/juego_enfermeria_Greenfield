import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonType } from "../../../enums/button-type.enum";

const baseStyles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "transparent",
  },
});

type VariantStyles = {
  button: ViewStyle;
  text: TextStyle;
};

const buttonVariants: Record<ButtonType, VariantStyles> = {
  [ButtonType.PRIMARY]: StyleSheet.create({
    button: { backgroundColor: "#00bcbc" },
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
};

export { baseStyles, buttonVariants };
