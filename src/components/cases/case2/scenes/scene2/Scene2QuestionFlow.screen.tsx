import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import FeedbackAlert from "@shared/components/feedbackAlert/feedback-alert.component";
import ProgressBar from "@shared/components/progressBar/progress-bar.component";
import QuizQuestion from "@shared/components/quizQuestion/quiz-question.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import type { QuizQuestionAnswer } from "@shared/types/quiz-question.type";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import type { RootStackParamList } from "@navigation/types";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { GlobalStyles } from "@styles-theme";
import scene2QuestionFlows from "./data/questionFlows";
import case2Scene2Questions from "./data/scene2Questions";
import { dialogStyles } from "../../../shared/styles/dialog.styles";
import { questionFlowStyles } from "./styles/question-flow.styles";
import { getSavedQuestionIds, saveQuestionProgress } from "../../../shared/utils/questionProgress.utils";

const CASE_ID = "case2";
const SCENE_ID = "scene2";
const quizBackgroundImage = require("@images/layout/background.png");
const FEEDBACK_DELAY_MS = 800;
const requiredQuestionIds = case2Scene2Questions.map((question) => question.id);

type QuestionFlowRouteProp = RouteProp<RootStackParamList, "Case2Scene2QuestionFlowScreen">;
type QuestionPhase = "dialog" | "quiz" | "followUpDialog";

const shuffleAnswers = <T,>(answers: T[]) => {
  const shuffledAnswers = [...answers];

  for (let index = shuffledAnswers.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledAnswers[index], shuffledAnswers[randomIndex]] = [shuffledAnswers[randomIndex], shuffledAnswers[index]];
  }

  return shuffledAnswers;
};

const Case2Scene2QuestionFlowScreen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const route = useRoute<QuestionFlowRouteProp>();
  const { questionId } = route.params;
  const [dialogStep, setDialogStep] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [followUpDialogStep, setFollowUpDialogStep] = useState(0);
  const [phase, setPhase] = useState<QuestionPhase>("dialog");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const configuredQuestionIds = ["question1", "question2"];
  const hasConfiguredFlow = configuredQuestionIds.includes(questionId);
  useScreenTitle(hasConfiguredFlow ? `case2.scene2.questionDialogs.${questionId}.screenTitle` : "case2.scene2.screenTitle");

  const currentQuestionFlow = scene2QuestionFlows[questionId];
  const showQuiz = phase === "quiz";
  const activeDialogEntries =
    phase === "followUpDialog" ? currentQuestionFlow.followUpDialog ?? currentQuestionFlow.dialog : currentQuestionFlow.dialog;
  const currentDialog = activeDialogEntries[phase === "followUpDialog" ? followUpDialogStep : dialogStep];
  const currentQuiz = currentQuestionFlow.quiz[quizStep];
  const shuffledAnswers = useMemo(
    () => shuffleAnswers(currentQuiz.answers),
    [currentQuiz.answers, questionId, quizStep, phase],
  );

  const finishQuestionFlow = async () => {
    await saveQuestionProgress(CASE_ID, SCENE_ID, questionId);
    const savedQuestionIds = await getSavedQuestionIds(CASE_ID, SCENE_ID);
    const hasCompletedAllQuestions = requiredQuestionIds.every((id) => savedQuestionIds.includes(id));

    if (hasCompletedAllQuestions) {
      navigation.navigate("SceneCompleteScreen", {
        caseId: CASE_ID,
        completedSceneId: SCENE_ID,
        nextSceneId: "scene3",
        returnScreen: "Case2Scene2Screen",
      });
      return;
    }

    navigation.goBack();
  };

  const handleDialogNext = () => {
    const currentStep = phase === "followUpDialog" ? followUpDialogStep : dialogStep;
    const nextStep = currentStep + 1;

    if (nextStep < activeDialogEntries.length) {
      phase === "followUpDialog" ? setFollowUpDialogStep(nextStep) : setDialogStep(nextStep);
      return;
    }

    if (phase === "followUpDialog") {
      finishQuestionFlow().catch((error) => console.error("Error finishing question flow", error));
    } else {
      setPhase("quiz");
    }
  };

  useEffect(
    () => () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    },
    [],
  );

  const handleAnswerPress = (isCorrect?: boolean) => {
    if (feedback) return;
    setFeedback(isCorrect ? "correct" : "incorrect");

    feedbackTimeoutRef.current = setTimeout(async () => {
      setFeedback(null);

      if (!isCorrect) {
        setPhase("dialog");
        setDialogStep(Math.max(currentQuestionFlow.dialog.length - 1, 0));
        return;
      }

      const nextQuizStep = quizStep + 1;
      if (nextQuizStep < currentQuestionFlow.quiz.length) {
        setQuizStep(nextQuizStep);
      } else if (currentQuestionFlow.followUpDialog?.length) {
        setPhase("followUpDialog");
      } else {
        await finishQuestionFlow();
      }
    }, FEEDBACK_DELAY_MS);
  };

  const backgroundImage = showQuiz ? quizBackgroundImage : currentDialog.image;

  return (
    <ImageBackground source={backgroundImage} style={GlobalStyles.container} resizeMode={showQuiz ? "cover" : "contain"}>
      {!showQuiz && (
        <Header
          leftButtons={[{ iconName: "arrow-undo-outline", onPress: () => navigation.goBack() }]}
          rightButtons={[{ iconName: "help-outline", onPress: () => console.log("Help clicked") }]}
        />
      )}
      <View style={showQuiz ? questionFlowStyles.quizContainer : dialogStyles.container}>
        <View style={showQuiz ? questionFlowStyles.quizPanel : dialogStyles.panel}>
          {showQuiz ? (
            <ScrollView style={dialogStyles.scroll} contentContainerStyle={questionFlowStyles.quizContent}>
              <ProgressBar
                value={quizStep + 1}
                max={currentQuestionFlow.quiz.length}
                label={t("common.quiz.questionCounter", { current: quizStep + 1, total: currentQuestionFlow.quiz.length })}
              />
              <QuizQuestion
                question={t(currentQuiz.questionKey)}
                instruction={t("common.quiz.instruction")}
                answers={shuffledAnswers.map((answer) => ({
                  id: answer.id,
                  text: t(answer.textKey),
                  correct: answer.correct,
                }))}
                disabled={!!feedback}
                onAnswerPress={(answer: QuizQuestionAnswer) => handleAnswerPress(answer.correct)}
              />
            </ScrollView>
          ) : (
            <ScrollView style={dialogStyles.scroll} contentContainerStyle={dialogStyles.scrollContent}>
              <Text
                style={[
                  dialogStyles.dialogText,
                  currentDialog.speaker === "patientPcp" && dialogStyles.patientDialogText,
                ]}
              >
                {t(`common.roles.${currentDialog.speaker}`)}
              </Text>
              <Button
                style={dialogStyles.dialogButton}
                text={t(
                  hasConfiguredFlow
                    ? `case2.scene2.questionDialogs.${questionId}.${phase === "followUpDialog" ? "followUpDialog" : "dialog"}.${currentDialog.id}`
                    : `case2.scene2.placeholder.${phase === "followUpDialog" ? "followUpDialog" : "dialog"}.${currentDialog.id}`,
                )}
                type={ButtonType.PRIMARY_TRANSPARENT}
                onPress={handleDialogNext}
              />
            </ScrollView>
          )}
        </View>
      </View>
      <FeedbackAlert correct={feedback === "correct"} visible={!!feedback} />
    </ImageBackground>
  );
};

export default Case2Scene2QuestionFlowScreen;
