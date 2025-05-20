import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useTranslation } from "react-i18next";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { CASE_SCREENS } from "@navigation/caseScreens";
import { GlobalStyles } from "@styles-theme";
import { casebaseStyles } from "./styles/case.styles";

const CaseMenuScreen = () => {
  const navigation = useAppNavigation();
  useScreenTitle("commom.titlePage.caseMenu");
  const { t } = useTranslation();

  // useExitOnBack({
  //   titleKey: "customExit.title",
  //   messageKey: "customExit.message",
  // });

  return (
    <ImageBackground
      source={require("@images/layout/background.png")}
      style={GlobalStyles.container}
      resizeMode="contain"
    >
      <Header
        leftButtons={[
          {
            iconName: "arrow-undo-outline",
            onPress: () => navigation.goBack(),
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
            iconName: "book-outline",
            onPress: () => console.log("Theory clicked"),
          },
        ]}
      />
      <View style={GlobalStyles.body}>
        <ScrollView
          style={[GlobalStyles.scroll, { paddingTop: 60 }]}
          contentContainerStyle={GlobalStyles.scrollContent}
        >
          {CASE_SCREENS.map((item, index) => (
            <Button
              key={item.name}
              type={ButtonType.PRIMARY}
              style={casebaseStyles.button}
              text={`${t("cases.case")} ${index + 1}`}
              onPress={() => navigation.navigate(item.screen)}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default CaseMenuScreen;
