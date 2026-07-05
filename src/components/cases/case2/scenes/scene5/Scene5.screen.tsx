import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Button from "@shared/components/button/button.component";
import FeedbackAlert from "@shared/components/feedbackAlert/feedback-alert.component";
import Message from "@shared/components/message/message.component";
import ProgressBar from "@shared/components/progressBar/progress-bar.component";
import QuizQuestion from "@shared/components/quizQuestion/quiz-question.component";
import SafeScrollView from "@shared/components/safeScrollView/safe-scroll-view.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { MessageVariant } from "@shared/enums/message-variant.enum";
import type { QuizQuestionAnswer } from "@shared/types/quiz-question.type";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Radius, Spacing, Typography } from "@styles-theme";
import scene5Quiz from "./data/scene5Quiz";

const CASE_ID = "case2";
const SCENE_ID = "scene5";
const FOOTER_RESERVED_SPACE = 104;

type SelectedAnswers = Record<string, string>;

const Case2Scene5Screen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasValidated, setHasValidated] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [message, setMessage] = useState<{
    title: string;
    text?: string;
    variant: MessageVariant;
  }>();

  useScreenTitle("case2.scene5.screenTitle");

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const answeredCount = Object.keys(selectedAnswers).length;
  const totalQuestions = scene5Quiz.length;
  const hasAnsweredAllQuestions = answeredCount === totalQuestions;
  const currentQuestion = scene5Quiz[currentQuestionIndex];

  const result = useMemo(() => {
    return scene5Quiz.reduce(
      (acc, question) => {
        const selectedAnswerId = selectedAnswers[question.id];
        const selectedAnswer = question.answers.find((answer) => answer.id === selectedAnswerId);

        if (!selectedAnswerId) {
          return acc;
        }

        if (selectedAnswer?.correct) {
          return { ...acc, correct: acc.correct + 1 };
        }

        return { ...acc, incorrect: acc.incorrect + 1 };
      },
      { correct: 0, incorrect: 0 }
    );
  }, [selectedAnswers]);

  const hasPerfectScore = hasAnsweredAllQuestions && result.correct === totalQuestions;
  const shouldShowSaveAction = hasValidated && hasPerfectScore;
  const shouldShowCorrectAction = hasValidated && !hasPerfectScore;

  const handleAnswerPress = (questionId: string, answerId: string, isCorrect?: boolean) => {
    if (hasValidated || feedback) {
      return;
    }

    setMessage(undefined);
    setFeedback(isCorrect ? "correct" : "incorrect");
    const nextSelectedAnswers = {
      ...selectedAnswers,
      [questionId]: answerId,
    };
    setSelectedAnswers(nextSelectedAnswers);

    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedback(null);

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
        return;
      }

      const finalResult = scene5Quiz.reduce(
        (acc, question) => {
          const selectedAnswerId = nextSelectedAnswers[question.id];
          const selectedAnswer = question.answers.find((answer) => answer.id === selectedAnswerId);

          if (selectedAnswer?.correct) {
            return { ...acc, correct: acc.correct + 1 };
          }

          return { ...acc, incorrect: acc.incorrect + 1 };
        },
        { correct: 0, incorrect: 0 }
      );
      const finalHasPerfectScore = finalResult.correct === totalQuestions;

      setHasValidated(true);
      setMessage({
        title: t(
          finalHasPerfectScore ? "case2.scene5.messages.completed.title" : "case2.scene5.messages.review.title"
        ),
        text: t(
          finalHasPerfectScore ? "case2.scene5.messages.completed.text" : "case2.scene5.messages.review.text",
          {
            correct: finalResult.correct,
            incorrect: finalResult.incorrect,
          }
        ),
        variant: finalHasPerfectScore ? MessageVariant.SUCCESS : MessageVariant.ERROR,
      });
    }, 850);
  };

  const handleQuizAnswerPress = (answer: QuizQuestionAnswer) => {
    if (!currentQuestion) {
      return;
    }

    handleAnswerPress(currentQuestion.id, answer.id, answer.correct);
  };

  const handleCorrect = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setHasValidated(false);
    setMessage({
      title: t("case2.scene5.messages.readyToCorrect.title"),
      text: t("case2.scene5.messages.readyToCorrect.text"),
      variant: MessageVariant.INFO,
    });
  };

  const handleBackToMenu = () => {
    navigation.navigate("Case2Menu");
  };

  const handleSave = () => {
    if (!hasPerfectScore) {
      setMessage({
        title: t("case2.scene5.messages.review.title"),
        text: t("case2.scene5.messages.review.saveBlocked"),
        variant: MessageVariant.ERROR,
      });
      return;
    }

    navigation.navigate("SceneCompleteScreen", {
      caseId: CASE_ID,
      completedSceneId: SCENE_ID,
      nextSceneId: "scene6",
      returnScreen: "Case2Menu",
    });
  };

  return (
    <ImageBackground source={require("@images/layout/background.png")} style={GlobalStyles.container} resizeMode="contain">
      <SafeScrollView
        style={GlobalStyles.scrollBase}
        contentContainerStyle={[GlobalStyles.scrollContentBase, styles.scrollContent]}
        bottomOffset={hasValidated ? FOOTER_RESERVED_SPACE : Spacing.xl}
      >
        <ProgressBar
          value={currentQuestionIndex + 1}
          max={totalQuestions}
          label={t("case2.scene5.questionCounter", { current: currentQuestionIndex + 1, total: totalQuestions })}
        />

        {!!message && <Message title={message.title} text={message.text} variant={message.variant} />}

        {hasValidated && (
          <View style={styles.resultCard}>
            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>{t("case2.scene5.results.correct")}</Text>
              <Text style={styles.resultValue}>{result.correct}</Text>
            </View>
            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>{t("case2.scene5.results.incorrect")}</Text>
              <Text style={styles.resultValue}>{result.incorrect}</Text>
            </View>
          </View>
        )}

        {!hasValidated && currentQuestion && (
          <QuizQuestion
            question={t(currentQuestion.questionKey)}
            instruction={t("common.quiz.instruction")}
            answers={currentQuestion.answers.map((answer) => ({
              id: answer.id,
              text: t(answer.textKey),
              correct: answer.correct,
            }))}
            disabled={!!feedback}
            onAnswerPress={handleQuizAnswerPress}
          />
        )}
      </SafeScrollView>
      {(shouldShowCorrectAction || shouldShowSaveAction) && (
        <View style={[styles.footer, { paddingBottom: Spacing.base + insets.bottom }]}>
          {shouldShowCorrectAction && (
            <View style={styles.footerActions}>
              <Button
                text={t("case2.scene5.actions.correct")}
                type={ButtonType.SECONDARY}
                style={[styles.button, styles.footerActionButton, styles.correctButton]}
                textStyle={styles.correctButtonText}
                onPress={handleCorrect}
              />
              <Button
                text={t("case2.scene5.actions.backToMenu")}
                type={ButtonType.PRIMARY}
                style={[styles.button, styles.footerActionButton]}
                onPress={handleBackToMenu}
              />
            </View>
          )}

          {shouldShowSaveAction && (
            <Button
              text={t("case2.scene5.actions.save")}
              type={ButtonType.PRIMARY}
              style={styles.button}
              onPress={handleSave}
            />
          )}
        </View>
      )}
      <FeedbackAlert correct={feedback === "correct"} visible={!!feedback} />
    </ImageBackground>
  );
};

export default Case2Scene5Screen;

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    gap: Spacing.base,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.xl,
  },
  resultCard: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderColor: Colors.grayscale.gray200,
    borderRadius: Radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    gap: Spacing.md,
    padding: Spacing.base,
  },
  resultItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.brand.primaryTransparentLight,
    borderRadius: Radius.md,
    padding: Spacing.md,
  },
  resultLabel: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.bold,
    marginBottom: Spacing.xs,
    textAlign: "center",
  },
  resultValue: {
    color: Colors.brand.primaryDark,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
  },
  footer: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderTopColor: Colors.grayscale.gray200,
    borderTopWidth: 1,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
  },
  footerActions: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  button: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
  footerActionButton: {
    flex: 1,
    width: undefined,
  },
  correctButton: {
    backgroundColor: Colors.grayscale.gray100,
  },
  correctButtonText: {
    color: Colors.text.default,
  },
});
