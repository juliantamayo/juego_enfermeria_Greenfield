import React, { useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { useTranslation } from "react-i18next";
import scene1Dialog from "./data/scene1Dialog";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { GlobalStyles } from "@styles-theme";
import { dialogStyles } from "../../../shared/styles/dialog.styles";

const Case2Scene1Screen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const [step, setStep] = useState(0);
  useScreenTitle("case2.scene1.screenTitle");

  const currentDialog = scene1Dialog[step];

  const handleNext = () => {
    const nextStep = step + 1;

    if (nextStep >= scene1Dialog.length) {
      navigation.navigate("SceneCompleteScreen", {
        caseId: "case2",
        completedSceneId: "scene1",
        nextSceneId: "scene2",
        returnScreen: "Case2Menu",
      });
    } else {
      setStep(nextStep);
    }
  };

  return (
    <ImageBackground source={currentDialog.image} style={GlobalStyles.container} resizeMode="contain">
      <Header
        leftButtons={[
          {
            iconName: "arrow-undo-outline",
            onPress: () => navigation.goBack(),
          },
        ]}
        rightButtons={[
          {
            iconName: "help-outline",
            onPress: () => console.log("Minigames clicked"),
          },
          {
            iconName: "reader-outline",
            onPress: () => console.log("Reader clicked"),
          },
        ]}
      />
      <View style={dialogStyles.container}>
        <View style={dialogStyles.panel}>
          <ScrollView style={dialogStyles.scroll} contentContainerStyle={dialogStyles.scrollContent}>
            <Text style={dialogStyles.dialogText}>{t(`common.roles.${currentDialog.speaker}`)}</Text>
            <Button
              style={dialogStyles.dialogButton}
              text={t(`case2.scene1.dialog.${currentDialog.id}`)}
              type={ButtonType.PRIMARY_TRANSPARENT}
              onPress={handleNext}
            />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Case2Scene1Screen;
