import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useTranslation } from "react-i18next";
import { CASES_SCENES } from "@navigation/caseSceneMap";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalStyles } from "@styles-theme";
import { casebaseStyles } from "../styles/case.styles";

const Case1MenuScreen = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();
  const [unlockedScenes, setUnlockedScenes] = useState<string[]>(["scene1"]);
  useScreenTitle("common.titlePage.Case1Menu");

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const data = await AsyncStorage.getItem("case1_progress");
        if (data) {
          const saved = JSON.parse(data);
          setUnlockedScenes(saved);
        }
      } catch (error) {
        console.error("Error loading progress", error);
      }
    };

    loadProgress();
  }, []);

  const scenes = CASES_SCENES["case1"];

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
        <ScrollView style={GlobalStyles.scroll} contentContainerStyle={GlobalStyles.scrollContent}>
          {scenes.map((scene, index) => (
            <Button
              key={scene.id}
              text={`${index + 1}. ${t(scene.titleKey)}`}
              type={ButtonType.ACTION}
              onPress={() => navigation.navigate(scene.screen)}
              style={[
                casebaseStyles.buttonScenes,
                { opacity: unlockedScenes.includes(scene.id) ? 1 : 0.5 },
                ...(index % 2 !== 0 ? [casebaseStyles.buttonOdd] : []),
              ]}
              disabled={!unlockedScenes.includes(scene.id)}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Case1MenuScreen;

const styles = StyleSheet.create({
  container: {},
});
