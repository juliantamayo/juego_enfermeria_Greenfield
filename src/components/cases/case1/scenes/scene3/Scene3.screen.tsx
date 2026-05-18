import React, { useCallback, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import GroupOption from "@shared/components/groupOption/group-option.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { GlobalStyles, Spacing } from "@styles-theme";
import scene3AssessmentAreas, { Scene3AssessmentArea } from "./data/scene3AssessmentAreas";
import { getSavedQuestionIds } from "../../../shared/utils/questionProgress.utils";
import { getSavedScenes } from "../../../shared/utils/progress.utils";

const CASE_ID = "case1";
const SCENE_ID = "scene3";
const requiredAssessmentIds = scene3AssessmentAreas.map((area) => area.id);

const getAssessmentRows = (areas: Scene3AssessmentArea[]) =>
  areas.reduce<Scene3AssessmentArea[][]>((rows, area, index) => {
    if (index % 2 === 0) {
      rows.push([area]);
    } else {
      rows[rows.length - 1].push(area);
    }

    return rows;
  }, []);

const Scene3Screen = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();
  const [completedAssessmentIds, setCompletedAssessmentIds] = useState<string[]>([]);
  const assessmentRows = getAssessmentRows(scene3AssessmentAreas);
  useScreenTitle("case1.scene3.screenTitle");

  const loadAssessmentProgress = useCallback(async () => {
    try {
      const [savedAssessmentIds, savedScenes] = await Promise.all([
        getSavedQuestionIds(CASE_ID, SCENE_ID),
        getSavedScenes(CASE_ID),
      ]);

      setCompletedAssessmentIds(savedAssessmentIds);

      const hasCompletedAllAssessments = requiredAssessmentIds.every((assessmentId) =>
        savedAssessmentIds.includes(assessmentId)
      );
      const sceneAlreadyCompleted = savedScenes.includes(SCENE_ID);

      if (hasCompletedAllAssessments && !sceneAlreadyCompleted) {
        navigation.navigate("SceneCompleteScreen", {
          caseId: CASE_ID,
          completedSceneId: SCENE_ID,
          nextSceneId: "scene4",
          returnScreen: "Scene3Screen",
        });
      }
    } catch (error) {
      console.error("Error loading assessment progress", error);
    }
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      loadAssessmentProgress();
    }, [loadAssessmentProgress])
  );

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
      <ScrollView
        style={GlobalStyles.scrollBase}
        contentContainerStyle={[GlobalStyles.scrollContentBase, styles.scrollContent]}
      >
        <View style={styles.grid}>
          {assessmentRows.map((row) => (
            <View key={row.map((area) => area.id).join("-")} style={styles.optionRow}>
              {row.map((area) => (
                <View key={area.id} style={styles.optionSlot}>
                  <GroupOption
                    iconName={area.iconName}
                    title={t(area.titleKey)}
                    description={t(area.descriptionKey)}
                    completed={completedAssessmentIds.includes(area.id)}
                    style={styles.optionCard}
                    onPress={() =>
                      area.flowId
                        ? navigation.navigate("Scene3AssessmentFlowScreen", { assessmentId: area.flowId })
                        : console.log(`${area.id} clicked`)
                    }
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Scene3Screen;

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  grid: {
    width: "100%",
    maxWidth: 760,
  },
  optionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: Spacing.xl,
  },
  optionSlot: {
    width: "48%",
    alignSelf: "stretch",
  },
  optionCard: {
    flex: 1,
    minHeight: 150,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.base,
  },
});
