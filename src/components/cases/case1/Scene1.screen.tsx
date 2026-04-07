import React, { useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useTranslation } from "react-i18next";
import scene1Dialog from "../data/case1/dialog";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { GlobalStyles } from "@styles-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dialogStyles } from "../styles/dialog.styles";

const saveSceneProgress = async (caseId: string, nextSceneId: string) => {
  await AsyncStorage.setItem(`${caseId}_progress`, JSON.stringify(["scene1", nextSceneId]));
};

const Scene1Screen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const [step, setStep] = useState(0);

  const currentDialog = scene1Dialog[step];

  const handleNext = async () => {
    const nextStep = step + 1;

    if (nextStep >= scene1Dialog.length) {
      await saveSceneProgress("case1", "scene2");
      navigation.navigate("Case1Menu");
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
            onPress: () => console.log("Minigames clicked"),
          },
        ]}
      />
      <View style={dialogStyles.container}>
        <View style={dialogStyles.panel}>
          <ScrollView style={dialogStyles.scroll} contentContainerStyle={dialogStyles.scrollContent}>
            <Text style={dialogStyles.dialogText}>{t(`common.roles.${currentDialog.speaker}`)}</Text>
            <Button
              style={dialogStyles.dialogButton}
              text={t(`case1.scene1.dialog.${currentDialog.id}`)}
              type={ButtonType.PRIMARY_TRANSPARENT}
              onPress={handleNext}
            />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Scene1Screen;
