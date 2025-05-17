import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { homeScreenStyles } from "./styles//home.screen.styles";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  useScreenTitle("commom.titlePage.home");

  return (
    <ImageBackground source={require("../../assets/imgs/layout/background.png")} style={homeScreenStyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>{t("home.title")}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.buttonText}>{t("home.goToSettings")}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "red",
  },
  button: {
    backgroundColor: "#00bcbc",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
