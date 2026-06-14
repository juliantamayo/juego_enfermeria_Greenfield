import React, { useCallback, useState } from "react";
import { View, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "@shared/components/header/header.component";
import ProgressBar from "@shared/components/progressBar/progress-bar.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useTranslation } from "react-i18next";
import { CASES_SCENES } from "@navigation/caseSceneMap";
import { GlobalStyles, Spacing } from "@styles-theme";
import { casebaseStyles } from "../shared/styles/case.styles";
import { getCompletedScenes, getSavedScenes } from "../shared/utils/progress.utils";

const Case2MenuScreen = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();
  const [unlockedScenes, setUnlockedScenes] = useState<string[]>(["scene1"]);
  const [completedScenes, setCompletedScenes] = useState<string[]>([]);
  useScreenTitle("common.titlePage.Case2Menu");

  useFocusEffect(
    useCallback(() => {
      const loadProgress = async () => {
        try {
          const [saved, completed] = await Promise.all([getSavedScenes("case2"), getCompletedScenes("case2")]);
          const inferredCompleted = saved.slice(0, Math.max(saved.length - 1, 0));
          const mergedCompleted = Array.from(new Set([...inferredCompleted, ...completed]));
          setUnlockedScenes(saved);
          setCompletedScenes(mergedCompleted);
        } catch (error) {
          console.error("Error loading progress", error);
        }
      };

      loadProgress();
    }, []),
  );

  const scenes = CASES_SCENES["case2"];
  const progressPercentage = scenes.length > 0 ? Math.round((completedScenes.length / scenes.length) * 100) : 0;

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
          <ProgressBar
            value={completedScenes.length}
            max={scenes.length}
            label={t("case2.menu.progress", { percentage: progressPercentage })}
            style={styles.progressBar}
            trackWrapperStyle={styles.progressTrackWrapper}
          />

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

export default Case2MenuScreen;

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    marginVertical: Spacing.base,
  },
  progressTrackWrapper: {
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: 0,
  },
});
