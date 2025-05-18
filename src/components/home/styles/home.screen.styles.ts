import { StyleSheet } from "react-native";
import { Radius } from "@styles-theme";

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  button_home: {
    height: 200,
    width: 200,
    borderRadius: Radius.full,
  },
});

export { homeScreenStyles };
