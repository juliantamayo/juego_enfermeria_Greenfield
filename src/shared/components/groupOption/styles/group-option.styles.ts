import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

const OPTION_MIN_HEIGHT = 184;
const MEDIA_SIZE = 64;

const styles = StyleSheet.create({
  option: {
    minHeight: OPTION_MIN_HEIGHT,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    backgroundColor: Colors.brand.white,
    borderColor: Colors.brand.primary,
    borderWidth: 1,
    borderRadius: Radius.md,
  },
  checkIcon: {
    position: "absolute",
    top: Spacing.sm,
    right: Spacing.sm,
  },
  compactOption: {
    minHeight: 60,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  disabled: {
    opacity: 0.55,
  },
  media: {
    width: MEDIA_SIZE,
    height: MEDIA_SIZE,
    marginBottom: Spacing.base,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Colors.brand.primary,
    borderRadius: Radius.full,
  },
  compactMedia: {
    width: 32,
    height: 32,
    marginBottom: Spacing.xs,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.bold,
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    textAlign: "center",
  },
  description: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.regular,
    paddingHorizontal: Spacing.md,
    textAlign: "center",
  },
});

export { styles };
