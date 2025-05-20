import React from "react";
import { Alert, BackHandler, ImageBackground, View } from "react-native";
// import { useTranslation } from "react-i18next";

import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useExitOnBack } from "@navigation/hooks/useExitOnBack";
import { GlobalStyles } from "@styles-theme";
import { homeScreenStyles } from "./styles/home.screen.styles";

const HomeScreen = () => {
  const navigation = useAppNavigation();

  useScreenTitle("commom.titlePage.home");
  useExitOnBack();

  return (
    <ImageBackground source={require("@images/layout/background.png")} style={GlobalStyles.container}>
      <Header
        leftButtons={[
          {
            iconName: "settings-outline",
            onPress: () => navigation.navigate("Settings"),
          },
          {
            iconName: "help-outline",
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
      <View style={GlobalStyles.body}>
        <Button
          image={require("../../assets/imgs/btn/btn_start.png")}
          style={homeScreenStyles.button_home}
          type={ButtonType.IMAGE}
          onPress={() => navigation.navigate("CaseMenu")}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
