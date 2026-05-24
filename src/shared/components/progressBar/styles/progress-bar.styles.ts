import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: Spacing.sm,
  },
  label: {
    color: Colors.brand.primaryDark,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
    textAlign: "center",
  },
  track: {
    width: "100%",
    height: 6,
    backgroundColor: Colors.grayscale.gray200,
    borderRadius: Radius.full,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: Colors.brand.primary,
    borderRadius: Radius.full,
  },
});
