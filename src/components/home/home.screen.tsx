import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "@shared/components/button/button";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { useTranslation } from "react-i18next";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { homeScreenStyles } from "./styles/home.screen.styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  useScreenTitle("commom.titlePage.home");

  return (
    <ImageBackground source={require("../../assets/imgs/layout/background.png")} style={homeScreenStyles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.buttonText}>{t("home.goToSettings")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Button
          image={require("../../assets/imgs/btn/btn_start.png")}
          type={ButtonType.ACTION}
          onPress={() => console.log("Start clicked")}
        />
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
    backgroundColor: "red",
  },
  container2: {
    flex: 1,
    backgroundColor: "blue",
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
