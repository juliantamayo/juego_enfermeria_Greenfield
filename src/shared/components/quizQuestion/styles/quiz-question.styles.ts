import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

export const styles = StyleSheet.create({
  questionCard: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderColor: Colors.grayscale.gray200,
    borderRadius: Radius.xl,
    borderWidth: 1,
    padding: Spacing.base,
  },
  question: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.bold,
    lineHeight: 24,
    marginBottom: Spacing.base,
    textAlign: "center",
  },
  instruction: {
    color: Colors.grayscale.gray600,
    fontSize: Typography.fontSize.sm,
    lineHeight: 20,
    textAlign: "center",
  },
  answers: {
    width: "100%",
    gap: Spacing.sm,
  },
  answer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.background.default,
    borderColor: Colors.grayscale.gray200,
    borderRadius: Radius.md,
    borderWidth: 1,
    flexDirection: "row",
    gap: Spacing.md,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
  },
  answerBadge: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e8f0",
    borderRadius: Radius.full,
  },
  answerBadgeText: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.bold,
  },
  answerText: {
    flex: 1,
    color: Colors.text.default,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.bold,
    lineHeight: 22,
    textAlign: "center",
  },
});
