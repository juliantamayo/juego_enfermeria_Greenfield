import { StyleSheet } from "react-native";

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  header: {
    flex: 0.3,
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  headerIzquierda: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerDerecha: {
    flex: 1,
    alignItems: "flex-end",
  },
  headerCentro: {
    flex: 1,
    alignItems: "center",
  },

  imageContainer: {
    margin: 10,
    borderRadius: 100,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  vBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  image2: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  buttonJP: {
    margin: 20,
    height: 90,
    width: 270,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3DD11",
    padding: 10,
    borderRadius: 20,
  },
  button: {
    margin: 20,
    height: 50,
    width: 270,
    alignItems: "center",
    backgroundColor: "#ADE827",
    padding: 10,
    borderRadius: 20,
  },
  button2: {
    margin: 20,
    height: 50,
    width: 270,
    alignItems: "center",
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 20,
  },
  button3: {
    margin: 20,
    height: 50,
    width: 270,
    alignItems: "center",
    backgroundColor: "#ADE827",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  margen: {
    width: 280,
    margin: 100,
  },
  margen2: {
    margin: 10,
  },
});

export { homeScreenStyles };
