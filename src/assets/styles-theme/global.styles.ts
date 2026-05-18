import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullWidthContainer: {
    flex: 1,
    width: "100%",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
  },
  scrollBase: {
    flex: 1,
    width: "100%",
  },
  scrollContentBase: {
    width: "100%",
  },
  scrollContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default GlobalStyles;
