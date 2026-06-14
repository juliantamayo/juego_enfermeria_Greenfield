import React, { useEffect, useMemo, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Button from "@shared/components/button/button.component";
import Header from "@shared/components/header/header.component";
import SafeScrollView from "@shared/components/safeScrollView/safe-scroll-view.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Radius, Spacing, Typography } from "@styles-theme";
import { saveSceneProgress } from "../../../shared/utils/progress.utils";
import scene6NursingDiagnoses, { NursingDiagnosisSectionKey } from "./data/scene6NursingDiagnoses";

const CASE_ID = "case1";
const SCENE_ID = "scene6";
const FOOTER_RESERVED_SPACE = 104;

const sectionKeys: NursingDiagnosisSectionKey[] = ["definition", "relatedTo", "evidencedBy"];

const Scene6Screen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useScreenTitle("case1.scene6.screenTitle");

  useEffect(() => {
    const markSceneAsCompleted = async () => {
      try {
        await saveSceneProgress(CASE_ID, SCENE_ID);
      } catch (error) {
        console.error("Error saving scene 6 progress", error);
      }
    };

    markSceneAsCompleted();
  }, []);

  const currentDiagnosis = scene6NursingDiagnoses[currentIndex];
  const totalDiagnoses = scene6NursingDiagnoses.length;
  const isFirstDiagnosis = currentIndex === 0;
  const isLastDiagnosis = currentIndex === totalDiagnoses - 1;

  const currentSections = useMemo(
    () =>
      sectionKeys.map((sectionKey) => ({
        key: sectionKey,
        title: t(`case1.scene6.sections.${sectionKey}`),
        text: t(currentDiagnosis.sections[sectionKey]),
      })),
    [currentDiagnosis, t]
  );

  const goToPrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, totalDiagnoses - 1));
  };

  return (
    <ImageBackground source={require("@images/layout/background.png")} style={GlobalStyles.container} resizeMode="contain">
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

      <SafeScrollView
        style={GlobalStyles.scrollBase}
        contentContainerStyle={styles.scrollContent}
        bottomOffset={FOOTER_RESERVED_SPACE}
      >
        <View style={styles.titleBanner}>
          <Text style={styles.title}>{t("case1.scene6.title")}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLine}>
            <Text style={styles.bold}>{t("case1.scene6.labels.nandaTag")}: </Text>
          </Text>
          <Text style={styles.cardLine}>
            <Text style={styles.bold}>{t("case1.scene6.labels.code")}: </Text>
            {currentDiagnosis.code}
          </Text>
          <Text style={styles.cardLine}>
            <Text style={styles.bold}>{t("case1.scene6.labels.diagnosis")}: </Text>
            {t(currentDiagnosis.diagnosisKey)}
          </Text>
        </View>

        {currentSections.map((section) => (
          <View key={section.key} style={styles.card}>
            <Text style={styles.cardLine}>
              <Text style={styles.bold}>{section.title}: </Text>
              {section.text}
            </Text>
          </View>
        ))}
      </SafeScrollView>

      <View style={[styles.footer, { paddingBottom: Spacing.base + insets.bottom }]}>
        <Button
          text={t("case1.scene6.actions.previous")}
          type={ButtonType.SECONDARY}
          style={[styles.footerButton, styles.secondaryButton, isFirstDiagnosis && styles.disabledButton]}
          textStyle={styles.secondaryButtonText}
          onPress={goToPrevious}
          disabled={isFirstDiagnosis}
        />
        <Text style={styles.counter}>
          {currentIndex + 1}/{totalDiagnoses}
        </Text>
        <Button
          text={t("case1.scene6.actions.next")}
          type={ButtonType.PRIMARY}
          style={[styles.footerButton, isLastDiagnosis && styles.disabledButton]}
          onPress={goToNext}
          disabled={isLastDiagnosis}
        />
      </View>
    </ImageBackground>
  );
};

export default Scene6Screen;

const styles = StyleSheet.create({
  scrollContent: {
    width: "100%",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.lg,
  },
  titleBanner: {
    width: "100%",
    backgroundColor: Colors.brand.primary,
    borderColor: Colors.text.default,
    borderRadius: Radius.md,
    borderWidth: 1,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.md,
  },
  title: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderColor: Colors.text.default,
    borderRadius: Radius.md,
    borderWidth: 1,
    padding: Spacing.md,
  },
  cardLine: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.md,
    lineHeight: 22,
  },
  bold: {
    fontWeight: Typography.fontWeight.bold,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.background.default,
    borderTopColor: Colors.grayscale.gray200,
    borderTopWidth: 1,
    flexDirection: "row",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
  },
  footerButton: {
    flex: 1,
    width: undefined,
  },
  secondaryButton: {
    backgroundColor: Colors.grayscale.gray100,
  },
  secondaryButtonText: {
    color: Colors.text.default,
  },
  disabledButton: {
    opacity: 0.45,
  },
  counter: {
    minWidth: 48,
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.bold,
    textAlign: "center",
  },
});
