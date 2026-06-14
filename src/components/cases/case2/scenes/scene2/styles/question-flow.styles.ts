import { StyleSheet } from "react-native";
import { Spacing } from "@styles-theme";

const questionFlowStyles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    width: "100%",
  },
  quizPanel: {
    backgroundColor: "transparent",
    flex: 1,
    paddingHorizontal: Spacing.lg,
    width: "100%",
  },
  quizContent: {
    flexGrow: 1,
    gap: Spacing.base,
    justifyContent: "flex-start",
    paddingBottom: Spacing.lg,
    paddingTop: Spacing.xl,
  },
});

export { questionFlowStyles };
