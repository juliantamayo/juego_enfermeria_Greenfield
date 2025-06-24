import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { GlobalStyles } from "@styles-theme";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useTranslation } from "react-i18next";
import scene1Dialog from "../data/case1/dialog";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";

const Scene1Screen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const [step, setStep] = useState(0);

  const currentDialog = scene1Dialog[step];

  const handleNext = async () => {
    const nextStep = step + 1;

    if (nextStep >= scene1Dialog.length) {
      await saveSceneProgress("case1", "scene1");
      navigation.navigate("Scene1CompleteScreen", { caseId: "case1" });
    } else {
      setStep(nextStep);
    }
  };

  return (
    <ImageBackground source={require("@images/layout/background.png")} style={GlobalStyles.container}>
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
        ]}
      />
      <View style={GlobalStyles.body}>
        <Text>{t(currentDialog.characterKey)}</Text>
        <ScrollView>
          <Button text={t(currentDialog.titleKey)} type={ButtonType.ACTION} onPress={handleNext} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Scene1Screen;

const styles = StyleSheet.create({
  container: {},
});
