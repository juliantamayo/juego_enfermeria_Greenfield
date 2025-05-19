import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@styles-theme";

export const FIRST_BUTTON_MARGIN_TOP = Spacing.xl;

const casebaseStyles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(3, 110, 101, 0.7)",
    borderRadius: Radius.md,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Spacing.md,
    height: 80,
    width: "46%",
  },
});

export { casebaseStyles };
