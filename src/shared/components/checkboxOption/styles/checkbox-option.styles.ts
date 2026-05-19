import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";
import { CheckboxOptionStatus } from "@shared/enums/checkbox-option-status.enum";

type CheckboxOptionStatusStyles = {
  container: ViewStyle;
  checkbox: ViewStyle;
  label: TextStyle;
  feedback: TextStyle;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 76,
    alignItems: "flex-start",
    backgroundColor: Colors.background.default,
    borderColor: Colors.grayscale.gray200,
    borderRadius: Radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    gap: Spacing.md,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.base,
  },
  disabled: {
    opacity: 1,
  },
  selectedContainer: {
    backgroundColor: Colors.message.success.background,
    borderColor: Colors.brand.primary,
  },
  checkbox: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#cbd5e1",
    borderRadius: Radius.sm,
    borderWidth: 2,
    marginTop: 1,
  },
  checkboxSelected: {
    backgroundColor: Colors.brand.primaryDark,
    borderColor: Colors.brand.primaryDark,
  },
  content: {
    flex: 1,
    gap: Spacing.xs,
  },
  label: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.bold,
    lineHeight: 22,
  },
  feedback: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
    lineHeight: 18,
  },
});

const statusStyles: Record<CheckboxOptionStatus, CheckboxOptionStatusStyles> = {
  [CheckboxOptionStatus.DEFAULT]: StyleSheet.create({
    container: {
      backgroundColor: Colors.background.default,
      borderColor: Colors.grayscale.gray200,
    },
    checkbox: {},
    label: {
      color: Colors.text.default,
    },
    feedback: {
      color: Colors.text.bodyText,
    },
  }),
  [CheckboxOptionStatus.CORRECT]: StyleSheet.create({
    container: {
      backgroundColor: Colors.message.success.background,
      borderColor: Colors.message.success.border,
    },
    checkbox: {},
    label: {
      color: Colors.text.default,
    },
    feedback: {
      color: Colors.message.success.text,
    },
  }),
  [CheckboxOptionStatus.INCORRECT]: StyleSheet.create({
    container: {
      backgroundColor: Colors.message.error.background,
      borderColor: Colors.message.error.border,
    },
    checkbox: {},
    label: {
      color: Colors.text.default,
    },
    feedback: {
      color: Colors.message.error.text,
    },
  }),
  [CheckboxOptionStatus.DISABLED]: StyleSheet.create({
    container: {
      backgroundColor: Colors.grayscale.gray100,
      borderColor: Colors.grayscale.gray200,
    },
    checkbox: {
      backgroundColor: Colors.background.default,
      borderColor: "#cbd5e1",
    },
    label: {
      color: Colors.grayscale.gray600,
    },
    feedback: {
      color: Colors.grayscale.gray600,
    },
  }),
};

export { styles, statusStyles };
