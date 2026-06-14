import React, { useCallback, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import SafeScrollView from "@shared/components/safeScrollView/safe-scroll-view.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Spacing } from "@styles-theme";
import CaseQuestionRowItem from "../../../shared/components/CaseQuestionRowItem.component";
import case2Scene2Questions from "./data/scene2Questions";
import { getSavedQuestionIds } from "../../../shared/utils/questionProgress.utils";
import { getCompletedScenes } from "../../../shared/utils/progress.utils";

const CASE_ID = "case2";
const SCENE_ID = "scene2";
const requiredQuestionIds = case2Scene2Questions.map((question) => question.id);

const Case2Scene2Screen = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();
  const [completedQuestionIds, setCompletedQuestionIds] = useState<string[]>([]);
  useScreenTitle("case2.scene2.screenTitle");

  const loadQuestionProgress = useCallback(async () => {
    try {
      const [savedQuestionIds, completedScenes] = await Promise.all([
        getSavedQuestionIds(CASE_ID, SCENE_ID),
        getCompletedScenes(CASE_ID),
      ]);

      setCompletedQuestionIds(savedQuestionIds);

      const hasCompletedAllQuestions = requiredQuestionIds.every((questionId) =>
        savedQuestionIds.includes(questionId),
      );
      const sceneAlreadyCompleted = completedScenes.includes(SCENE_ID);

      if (hasCompletedAllQuestions && !sceneAlreadyCompleted) {
        navigation.navigate("SceneCompleteScreen", {
          caseId: CASE_ID,
          completedSceneId: SCENE_ID,
          nextSceneId: "scene3",
          returnScreen: "Case2Scene2Screen",
        });
      }
    } catch (error) {
      console.error("Error loading question progress", error);
    }
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      loadQuestionProgress();
    }, [loadQuestionProgress]),
  );

  const handleQuestionPress = (questionId: string) => {
    const question = case2Scene2Questions.find((item) => item.id === questionId);

    if (question?.dialogId) {
      navigation.navigate("Case2Scene2QuestionFlowScreen", { questionId: question.dialogId });
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
          {case2Scene2Questions.map((question) => (
            <CaseQuestionRowItem
              key={question.id}
              name={t(question.titleKey)}
              color={Colors.question[question.colorVariant]}
              completed={completedQuestionIds.includes(question.id)}
              onPress={() => handleQuestionPress(question.id)}
            />
          ))}
        </SafeScrollView>
      </View>
    </ImageBackground>
  );
};

export default Case2Scene2Screen;

const styles = StyleSheet.create({
  scrollContent: {
    gap: Spacing.md,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
});
