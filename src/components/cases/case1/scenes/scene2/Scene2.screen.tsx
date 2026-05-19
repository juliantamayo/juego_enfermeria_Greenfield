import React, { useCallback, useState } from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import SafeScrollView from "@shared/components/safeScrollView/safe-scroll-view.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Spacing } from "@styles-theme";
import CaseQuestionRowItem from "../../../shared/components/CaseQuestionRowItem.component";
import case1Scene2Questions from "./data/scene2Questions";
import { getSavedQuestionIds, saveQuestionProgress } from "../../../shared/utils/questionProgress.utils";
import { getSavedScenes } from "../../../shared/utils/progress.utils";

const CASE_ID = "case1";
const SCENE_ID = "scene2";
const requiredQuestionIds = case1Scene2Questions.map((question) => question.id);

const Scene2Screen = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();
  const [completedQuestionIds, setCompletedQuestionIds] = useState<string[]>([]);
  useScreenTitle("case1.scene2.screenTitle");

  const loadQuestionProgress = useCallback(async () => {
    try {
      const [savedQuestionIds, savedScenes] = await Promise.all([
        getSavedQuestionIds(CASE_ID, SCENE_ID),
        getSavedScenes(CASE_ID),
      ]);

      setCompletedQuestionIds(savedQuestionIds);

      const hasCompletedAllQuestions = requiredQuestionIds.every((questionId) =>
        savedQuestionIds.includes(questionId)
      );
      const sceneAlreadyCompleted = savedScenes.includes(SCENE_ID);

      if (hasCompletedAllQuestions && !sceneAlreadyCompleted) {
        navigation.navigate("SceneCompleteScreen", {
          caseId: CASE_ID,
          completedSceneId: SCENE_ID,
          nextSceneId: "scene3",
          returnScreen: "Scene2Screen",
        });
      }
    } catch (error) {
      console.error("Error loading question progress", error);
    }
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      loadQuestionProgress();
    }, [loadQuestionProgress])
  );

  const handleQuestionPress = async (questionId: string) => {
    const question = case1Scene2Questions.find((item) => item.id === questionId);

    if (question?.dialogId) {
      navigation.navigate("Scene2QuestionFlowScreen", { questionId: question.dialogId });
      return;
    }

    try {
      await saveQuestionProgress(CASE_ID, SCENE_ID, questionId);
      await loadQuestionProgress();
      Alert.alert("Pregunta seleccionada", "Cuando creemos la pantalla de dialogo, aqui navegaremos a esa pregunta.");
    } catch (error) {
      console.error("Error saving question progress", error);
      Alert.alert("Error", "No se pudo actualizar el progreso de la pregunta.");
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
            onPress: () => console.log("Help clicked"),
          },
        ]}
      />
      <View style={GlobalStyles.fullWidthContainer}>
        <SafeScrollView
          style={GlobalStyles.scrollBase}
          contentContainerStyle={[GlobalStyles.scrollContentBase, styles.scrollContent]}
          bottomOffset={Spacing.lg}
        >
          {case1Scene2Questions.map((question) => {
            const isCompleted = completedQuestionIds.includes(question.id);

            return (
              <CaseQuestionRowItem
                key={question.id}
                name={t(question.titleKey)}
                color={Colors.question[question.colorVariant]}
                completed={isCompleted}
                onPress={() => handleQuestionPress(question.id)}
              />
            );
          })}
        </SafeScrollView>
      </View>
    </ImageBackground>
  );
};

export default Scene2Screen;

const styles = StyleSheet.create({
  scrollContent: {
    gap: Spacing.md,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
});
