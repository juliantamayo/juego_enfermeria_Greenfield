import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

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
    gap: Spacing.sm,
    justifyContent: "flex-start",
    paddingBottom: Spacing.lg,
  },
  quizCounter: {
    alignSelf: "center",
    color: Colors.brand.primary,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    marginTop: Spacing.sm,
  },
  quizQuestion: {
    backgroundColor: Colors.brand.primaryDark,
    borderRadius: Radius.md,
    color: Colors.text.inverse,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.bold,
    padding: Spacing.md,
    textAlign: "center",
  },
  answerButton: {
    width: "100%",
    paddingVertical: Spacing.md,
  },
  answerText: {
    fontSize: Typography.fontSize.md,
    textAlign: "center",
  },
});

export { questionFlowStyles };
