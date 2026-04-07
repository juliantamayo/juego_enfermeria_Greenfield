import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

const dialogStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  panel: {
    width: "100%",
    height: "42%",
    backgroundColor: Colors.brand.primaryTransparentLight,
    paddingBottom: 40,
    paddingHorizontal: Spacing.md,
  },
  dialogText: {
    width: "100%",
    color: Colors.text.inverse,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.medium,
    backgroundColor: Colors.brand.red,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.sm,
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    gap: Spacing.md,
    justifyContent: "flex-start",
  },
  dialogButton: {
    width: "100%",
    paddingVertical: Spacing.lg,
  },
});

export { dialogStyles };
