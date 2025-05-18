import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sideColumn: {
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
    borderRadius: 100,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});

export { headerStyles };
