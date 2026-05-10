import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import FeedbackAlert from "@shared/components/feedbackAlert/feedback-alert.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import type { RootStackParamList } from "@navigation/types";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Radius, Spacing, Typography } from "@styles-theme";
import scene2QuestionDialogs from "./data/questionDialogs";
import { dialogStyles } from "../../../shared/styles/dialog.styles";
import { saveQuestionProgress } from "../../../shared/utils/questionProgress.utils";

const CASE_ID = "case1";
const SCENE_ID = "scene2";
const quizBackgroundImage = require("@images/layout/background.png");
const FEEDBACK_DELAY_MS = 800;

type Scene2QuestionDialogRouteProp = RouteProp<RootStackParamList, "Scene2QuestionDialogScreen">;
type QuestionPhase = "dialog" | "quiz" | "followUpDialog";

const shuffleAnswers = <T,>(answers: T[]) => {
  const shuffledAnswers = [...answers];

  for (let index = shuffledAnswers.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledAnswers[index], shuffledAnswers[randomIndex]] = [shuffledAnswers[randomIndex], shuffledAnswers[index]];
  }

  return shuffledAnswers;
};

const Scene2QuestionDialogScreen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const route = useRoute<Scene2QuestionDialogRouteProp>();
  const { questionId } = route.params;
  const [dialogStep, setDialogStep] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [followUpDialogStep, setFollowUpDialogStep] = useState(0);
  const [phase, setPhase] = useState<QuestionPhase>("dialog");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useScreenTitle(`case1.scene2.questionDialogs.${questionId}.screenTitle`);

  const currentQuestionFlow = scene2QuestionDialogs[questionId];
  const showQuiz = phase === "quiz";
  const activeDialogEntries =
    phase === "followUpDialog" ? currentQuestionFlow.followUpDialog ?? currentQuestionFlow.dialog : currentQuestionFlow.dialog;
  const currentDialog = activeDialogEntries[phase === "followUpDialog" ? followUpDialogStep : dialogStep];
  const currentQuiz = currentQuestionFlow.quiz[quizStep];
  const correctCount = quizStep;
  const totalCount = currentQuestionFlow.quiz.length;
  const shuffledAnswers = useMemo(
    () => shuffleAnswers(currentQuiz.answers),
    [currentQuiz.answers, questionId, quizStep, phase],
  );

  const navigateToSceneComplete = async () => {
    await saveQuestionProgress(CASE_ID, SCENE_ID, questionId);
    navigation.navigate("SceneCompleteScreen", {
      caseId: CASE_ID,
      completedSceneId: SCENE_ID,
      nextSceneId: "scene3",
      returnScreen: "Scene2Screen",
    });
  };

  const handleDialogNext = () => {
    if (phase === "followUpDialog") {
      const nextStep = followUpDialogStep + 1;

      if (nextStep >= activeDialogEntries.length) {
        navigateToSceneComplete().catch((error) => console.error("Error navigating to scene complete", error));
      } else {
        setFollowUpDialogStep(nextStep);
      }

      return;
    }

    const nextStep = dialogStep + 1;

    if (nextStep >= currentQuestionFlow.dialog.length) {
      setPhase("quiz");
    } else {
      setDialogStep(nextStep);
    }
  };

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const handleAnswerPress = (isCorrect?: boolean) => {
    if (feedback) {
      return;
    }

    setFeedback(isCorrect ? "correct" : "incorrect");

    feedbackTimeoutRef.current = setTimeout(async () => {
      setFeedback(null);

      if (!isCorrect) {
        setPhase("dialog");
        setDialogStep(Math.max(currentQuestionFlow.dialog.length - 1, 0));
        return;
      }

      const nextQuizStep = quizStep + 1;

      if (nextQuizStep >= currentQuestionFlow.quiz.length) {
        if (currentQuestionFlow.followUpDialog?.length) {
          setFollowUpDialogStep(0);
          setPhase("followUpDialog");
        } else {
          await navigateToSceneComplete();
        }
      } else {
        setQuizStep(nextQuizStep);
      }
    }, FEEDBACK_DELAY_MS);
  };

  const screenContent = (
    <>
      {!showQuiz && (
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
            {
              iconName: "reader-outline",
              onPress: () => console.log("Reader clicked"),
            },
          ]}
        />
      )}
      <View style={showQuiz ? styles.quizContainer : dialogStyles.container}>
        <View style={showQuiz ? styles.quizPanel : dialogStyles.panel}>
          {showQuiz ? (
            <ScrollView style={dialogStyles.scroll} contentContainerStyle={styles.quizContent}>
              <Text style={styles.quizQuestion}>{t(currentQuiz.questionKey)}</Text>
              {shuffledAnswers.map((answer) => (
                <Button
                  key={answer.id}
                  style={styles.answerButton}
                  text={t(answer.textKey)}
                  textStyle={styles.answerText}
                  type={ButtonType.PRIMARY_TRANSPARENT}
                  disabled={!!feedback}
                  onPress={() => handleAnswerPress(answer.correct)}
                />
              ))}
              <Text style={styles.quizCounter}>{`${correctCount}/${totalCount}`}</Text>
            </ScrollView>
          ) : (
            <ScrollView style={dialogStyles.scroll} contentContainerStyle={dialogStyles.scrollContent}>
              <Text
                style={[dialogStyles.dialogText, currentDialog.speaker === "patientCjm" && styles.patientRoleLabel]}
              >
                {t(`common.roles.${currentDialog.speaker}`)}
              </Text>
              <Button
                style={dialogStyles.dialogButton}
                text={t(
                  `case1.scene2.questionDialogs.${questionId}.${phase === "followUpDialog" ? "followUpDialog" : "dialog"}.${currentDialog.id}`,
                )}
                type={ButtonType.PRIMARY_TRANSPARENT}
                onPress={handleDialogNext}
              />
            </ScrollView>
          )}
        </View>
      </View>
      <FeedbackAlert correct={feedback === "correct"} visible={!!feedback} />
    </>
  );

  const backgroundImage = showQuiz ? quizBackgroundImage : currentDialog.image;

  return (
    <ImageBackground
      source={backgroundImage}
      style={GlobalStyles.container}
      resizeMode={showQuiz ? "cover" : "contain"}
    >
      {screenContent}
    </ImageBackground>
  );
};

export default Scene2QuestionDialogScreen;

const styles = StyleSheet.create({
  patientRoleLabel: {
    backgroundColor: "#880e4f",
  },
  quizContainer: {
    flex: 1,
    width: "100%",
  },
  quizPanel: {
    backgroundColor: "transparent",
    flex: 1,
    paddingHorizontal: Spacing.lg,
    width: "100%",
  },
  quizContent: {
    flexGrow: 1,
    gap: Spacing.sm,
    justifyContent: "flex-start",
    paddingBottom: Spacing.lg,
  },
  quizCounter: {
    alignSelf: "center",
    color: Colors.brand.primary,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    marginTop: Spacing.sm,
  },
  quizQuestion: {
    backgroundColor: Colors.brand.primaryDark,
    borderRadius: Radius.md,
    color: Colors.text.inverse,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.bold,
    padding: Spacing.md,
    textAlign: "center",
  },
  answerButton: {
    width: "100%",
    paddingVertical: Spacing.md,
  },
  answerText: {
    fontSize: Typography.fontSize.md,
    textAlign: "center",
  },
});



