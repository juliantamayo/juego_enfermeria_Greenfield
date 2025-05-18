import { StyleSheet } from "react-native";
import { Colors, Spacing, Radius } from "@styles-theme";

const headerStyles = StyleSheet.create({
  header: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.base,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sideColumn: {
    flexDirection: "column",
    gap: Spacing.md,
    alignItems: "center",
    borderRadius: Radius.full,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: Radius.full,
    borderColor: Colors.border.default,
    borderWidth: 1,
    borderBottomWidth: 4,
    //ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // shadiw android
    elevation: 8,
  },
});

export { headerStyles };
