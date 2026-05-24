import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";
import { MessageVariant } from "@shared/enums/message-variant.enum";

type MessageVariantStyles = {
  container: ViewStyle;
  title: TextStyle;
  text: TextStyle;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.base,
  },
  title: {
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.bold,
    marginBottom: Spacing.xs,
  },
  text: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.regular,
    lineHeight: 20,
  },
});

const variantStyles: Record<MessageVariant, MessageVariantStyles> = {
  [MessageVariant.INFO]: StyleSheet.create({
    container: {
      backgroundColor: Colors.message.info.background,
      borderColor: Colors.message.info.border,
    },
    title: {
      color: Colors.message.info.title,
    },
    text: {
      color: Colors.message.info.text,
    },
  }),
  [MessageVariant.SUCCESS]: StyleSheet.create({
    container: {
      backgroundColor: Colors.message.success.background,
      borderColor: Colors.message.success.border,
    },
    title: {
      color: Colors.message.success.title,
    },
    text: {
      color: Colors.message.success.text,
    },
  }),
  [MessageVariant.WARNING]: StyleSheet.create({
    container: {
      backgroundColor: Colors.message.warning.background,
      borderColor: Colors.message.warning.border,
    },
    title: {
      color: Colors.message.warning.title,
    },
    text: {
      color: Colors.message.warning.text,
    },
  }),
  [MessageVariant.ERROR]: StyleSheet.create({
    container: {
      backgroundColor: Colors.message.error.background,
      borderColor: Colors.message.error.border,
    },
    title: {
      color: Colors.message.error.title,
    },
    text: {
      color: Colors.message.error.text,
    },
  }),
};

export { styles, variantStyles };
