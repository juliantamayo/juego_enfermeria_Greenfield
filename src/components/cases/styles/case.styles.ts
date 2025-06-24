import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@styles-theme";

const casebaseStyles = StyleSheet.create({
  button: {
    backgroundColor: Colors.backgroundButton.primaryTransparent,
    borderRadius: Radius.md,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Spacing.md,
    height: 80,
    width: "46%",
  },
  buttonScenes: {
    marginVertical: Spacing.md,
    width: "80%",
  },
  buttonOdd: {
    backgroundColor: Colors.backgroundButton.secondaryDark,
  },
});

export { casebaseStyles };
