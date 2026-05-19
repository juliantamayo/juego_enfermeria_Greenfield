import React, { useMemo, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import Summary from "@shared/components/summary/summary.component";
import Message from "@shared/components/message/message.component";
import CheckboxOption, { CheckboxOptionStatus } from "@shared/components/checkboxOption/checkbox-option.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { MessageVariant } from "@shared/enums/message-variant.enum";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Radius, Spacing } from "@styles-theme";
import scene4Findings from "./data/scene4Findings";

const CASE_ID = "case1";
const SCENE_ID = "scene4";
const FOOTER_RESERVED_SPACE = 104;

const Scene4Screen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [selectedFindingIds, setSelectedFindingIds] = useState<string[]>([]);
  const [hasValidated, setHasValidated] = useState(false);
  const [message, setMessage] = useState<{
    title: string;
    text?: string;
    variant: MessageVariant;
  }>();

  useScreenTitle("case1.scene4.screenTitle");

  const correctFindingIds = useMemo(
    () => scene4Findings.filter((finding) => finding.correct).map((finding) => finding.id),
    []
  );
  const selectedIncorrectIds = useMemo(
    () => selectedFindingIds.filter((findingId) => !correctFindingIds.includes(findingId)),
    [correctFindingIds, selectedFindingIds]
  );
  const missingCorrectIds = useMemo(
    () => correctFindingIds.filter((findingId) => !selectedFindingIds.includes(findingId)),
    [correctFindingIds, selectedFindingIds]
  );
  const hasCompletedFindings = selectedIncorrectIds.length === 0 && missingCorrectIds.length === 0;

  const toggleFinding = (findingId: string) => {
    setHasValidated(false);
    setMessage(undefined);
    setSelectedFindingIds((currentIds) =>
      currentIds.includes(findingId)
        ? currentIds.filter((currentId) => currentId !== findingId)
        : [...currentIds, findingId]
    );
  };

  const getOptionStatus = (findingId: string, isCorrect: boolean) => {
    const isSelected = selectedFindingIds.includes(findingId);

    if (!hasValidated) {
      return CheckboxOptionStatus.DEFAULT;
    }

    if (!isSelected) {
      return CheckboxOptionStatus.DISABLED;
    }

    return isCorrect ? CheckboxOptionStatus.CORRECT : CheckboxOptionStatus.INCORRECT;
  };

  const getOptionFeedback = (findingId: string, isCorrect: boolean) => {
    const isSelected = selectedFindingIds.includes(findingId);

    if (!hasValidated || !isSelected) {
      return undefined;
    }

    return isCorrect ? t("case1.scene4.feedback.correct") : t("case1.scene4.feedback.incorrect");
  };

  const handleValidate = () => {
    setHasValidated(true);

    if (selectedFindingIds.length === 0) {
      setMessage({
        title: t("case1.scene4.messages.emptySelection.title"),
        text: t("case1.scene4.messages.emptySelection.text"),
        variant: MessageVariant.WARNING,
      });
      return;
    }

    const selectedCorrectIds = selectedFindingIds.filter((findingId) => correctFindingIds.includes(findingId));

    if (!hasCompletedFindings) {
      setMessage({
        title: t("case1.scene4.messages.review.title"),
        text:
          selectedCorrectIds.length === 0
            ? t("case1.scene4.messages.review.selectFindings")
            : t("case1.scene4.messages.review.missingOrIncorrect"),
        variant: MessageVariant.ERROR,
      });
      return;
    }

    setMessage({
      title: t("case1.scene4.messages.completed.title"),
      text: t("case1.scene4.messages.completed.text"),
      variant: MessageVariant.SUCCESS,
    });
  };

  const handleCorrect = () => {
    setSelectedFindingIds([]);
    setHasValidated(false);
    setMessage({
      title: t("case1.scene4.messages.readyToCorrect.title"),
      text: t("case1.scene4.messages.readyToCorrect.text"),
      variant: MessageVariant.INFO,
    });
  };

  const handleContinue = () => {
    if (!hasCompletedFindings) {
      setMessage({
        title: t("case1.scene4.messages.review.title"),
        text: t("case1.scene4.messages.review.correctBeforeContinue"),
        variant: MessageVariant.ERROR,
      });
      return;
    }

    navigation.navigate("SceneCompleteScreen", {
      caseId: CASE_ID,
      completedSceneId: SCENE_ID,
      nextSceneId: "scene5",
      returnScreen: "Case1Menu",
    });
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

      <ScrollView
        style={GlobalStyles.scrollBase}
        contentContainerStyle={[
          GlobalStyles.scrollContentBase,
          styles.scrollContent,
          { paddingBottom: FOOTER_RESERVED_SPACE + insets.bottom },
        ]}
      >
        <Summary
          eyebrow={t("case1.scene4.summary.eyebrow")}
          title={t("case1.scene4.summary.title")}
          description={t("case1.scene4.summary.description")}
          counterLabel={t("case1.scene4.summary.counterLabel")}
          counterValue={selectedFindingIds.length}
        />

        {!!message && <Message title={message.title} text={message.text} variant={message.variant} />}

        <View style={styles.options}>
          {scene4Findings.map((finding) => (
            <CheckboxOption
              key={finding.id}
              label={t(finding.labelKey)}
              selected={selectedFindingIds.includes(finding.id)}
              status={getOptionStatus(finding.id, finding.correct)}
              feedback={getOptionFeedback(finding.id, finding.correct)}
              onPress={hasValidated ? undefined : () => toggleFinding(finding.id)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Spacing.base + insets.bottom }]}>
        {hasValidated ? (
          <View style={styles.actionsRow}>
            <Button
              text={t("case1.scene4.actions.correct")}
              type={ButtonType.SECONDARY}
              style={[styles.actionButton, styles.correctButton]}
              textStyle={styles.correctButtonText}
              onPress={handleCorrect}
            />
            <Button
              text={t("case1.scene4.actions.continue")}
              type={ButtonType.PRIMARY}
              style={styles.actionButton}
              onPress={handleContinue}
            />
          </View>
        ) : (
          <Button
            text={t("case1.scene4.actions.validate")}
            type={ButtonType.PRIMARY}
            style={styles.button}
            onPress={handleValidate}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default Scene4Screen;

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    gap: Spacing.base,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.xl,
  },
  options: {
    width: "100%",
    gap: Spacing.md,
  },
  button: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
  footer: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderTopColor: Colors.grayscale.gray200,
    borderTopWidth: 1,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
  },
  actionsRow: {
    width: "100%",
    flexDirection: "row",
    gap: Spacing.md,
  },
  actionButton: {
    flex: 1,
    borderRadius: Radius.xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
  correctButton: {
    backgroundColor: Colors.grayscale.gray100,
  },
  correctButtonText: {
    color: Colors.text.default,
  },
});
