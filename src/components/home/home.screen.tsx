import React from "react";
import { ImageBackground, View } from "react-native";
import { useTranslation } from "react-i18next";

import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { homeScreenStyles } from "./styles/home.screen.styles";

const HomeScreen = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();

  useScreenTitle("commom.titlePage.home");

  return (
    <ImageBackground source={require("../../assets/imgs/layout/background.png")} style={homeScreenStyles.container}>
      <Header
        leftButtons={[
          {
            iconName: "settings-outline",
            onPress: () => navigation.navigate("Settings"),
          },
          {
            iconName: "help-circle-outline",
            onPress: () => console.log("Help clicked"),
          },
        ]}
        rightButtons={[
          {
            iconName: "game-controller-outline",
            onPress: () => console.log("Minigames clicked"),
          },
          {
            iconName: "document-text-outline",
            onPress: () => console.log("Theory clicked"),
          },
        ]}
      />
      <View style={homeScreenStyles.body}>
        <Button
          image={require("../../assets/imgs/btn/btn_start.png")}
          style={homeScreenStyles.button_home}
          type={ButtonType.IMAGE}
          onPress={() => console.log("Start clicked")}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
