import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderRadius: Radius.xl,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.grayscale.gray200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  eyebrow: {
    color: Colors.brand.primaryDark,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
    marginBottom: Spacing.sm,
  },
  title: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    marginBottom: Spacing.sm,
  },
  description: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.regular,
    lineHeight: 22,
    marginBottom: Spacing.base,
  },
  counter: {
    alignItems: "center",
    backgroundColor: Colors.brand.primaryTransparentLight,
    borderRadius: Radius.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  counterLabel: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
  },
  counterValue: {
    color: Colors.brand.primaryDark,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
  },
});

export { styles };
