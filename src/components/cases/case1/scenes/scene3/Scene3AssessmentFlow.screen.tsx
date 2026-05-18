import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
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
import { GlobalStyles } from "@styles-theme";
import { dialogStyles } from "../../../shared/styles/dialog.styles";
import { questionFlowStyles } from "../scene2/styles/question-flow.styles";
import scene3AssessmentFlows from "./data/assessmentFlows";

type Scene3AssessmentFlowRouteProp = RouteProp<RootStackParamList, "Scene3AssessmentFlowScreen">;
type AssessmentPhase = "dialog" | "quiz" | "followUpDialog";

const quizBackgroundImage = require("@images/layout/background.png");
const FEEDBACK_DELAY_MS = 800;

const shuffleAnswers = <T,>(answers: T[]) => {
  const shuffledAnswers = [...answers];

  for (let index = shuffledAnswers.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledAnswers[index], shuffledAnswers[randomIndex]] = [shuffledAnswers[randomIndex], shuffledAnswers[index]];
  }

  return shuffledAnswers;
};

const Scene3AssessmentFlowScreen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const route = useRoute<Scene3AssessmentFlowRouteProp>();
  const { assessmentId } = route.params;
  const [dialogStep, setDialogStep] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [followUpDialogStep, setFollowUpDialogStep] = useState(0);
  const [phase, setPhase] = useState<AssessmentPhase>("dialog");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useScreenTitle(`case1.scene3.assessmentDialogs.${assessmentId}.screenTitle`);

  const currentAssessmentFlow = scene3AssessmentFlows[assessmentId];
  const showQuiz = phase === "quiz";
  const activeDialogEntries =
    phase === "followUpDialog"
      ? currentAssessmentFlow.followUpDialog ?? currentAssessmentFlow.dialog
      : currentAssessmentFlow.dialog;
  const currentDialog = activeDialogEntries[phase === "followUpDialog" ? followUpDialogStep : dialogStep];
  const currentQuiz = currentAssessmentFlow.quiz[quizStep];
  const correctCount = quizStep;
  const totalCount = currentAssessmentFlow.quiz.length;
  const shuffledAnswers = useMemo(
    () => shuffleAnswers(currentQuiz.answers),
    [currentQuiz.answers, assessmentId, quizStep, phase],
  );

  const handleDialogNext = () => {
    if (phase === "followUpDialog") {
      const nextStep = followUpDialogStep + 1;

      if (nextStep >= activeDialogEntries.length) {
        navigation.goBack();
      } else {
        setFollowUpDialogStep(nextStep);
      }

      return;
    }

    const nextStep = dialogStep + 1;

    if (nextStep >= currentAssessmentFlow.dialog.length) {
      setPhase("quiz");
      return;
    }

    setDialogStep(nextStep);
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

    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedback(null);

      if (!isCorrect) {
        setPhase("dialog");
        setDialogStep(Math.max(currentAssessmentFlow.dialog.length - 1, 0));
        return;
      }

      const nextQuizStep = quizStep + 1;

      if (nextQuizStep >= currentAssessmentFlow.quiz.length) {
        if (currentAssessmentFlow.followUpDialog?.length) {
          setFollowUpDialogStep(0);
          setPhase("followUpDialog");
        } else {
          navigation.goBack();
        }
      } else {
        setQuizStep(nextQuizStep);
      }
    }, FEEDBACK_DELAY_MS);
  };

  return (
    <ImageBackground
      source={showQuiz ? quizBackgroundImage : currentDialog.image}
      style={GlobalStyles.container}
      resizeMode={showQuiz ? "cover" : "contain"}
    >
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
      <View style={showQuiz ? questionFlowStyles.quizContainer : dialogStyles.container}>
        <View style={showQuiz ? questionFlowStyles.quizPanel : dialogStyles.panel}>
          {showQuiz ? (
            <ScrollView style={dialogStyles.scroll} contentContainerStyle={questionFlowStyles.quizContent}>
              <Text style={questionFlowStyles.quizQuestion}>{t(currentQuiz.questionKey)}</Text>
              {shuffledAnswers.map((answer) => (
                <Button
                  key={answer.id}
                  style={questionFlowStyles.answerButton}
                  text={t(answer.textKey)}
                  textStyle={questionFlowStyles.answerText}
                  type={ButtonType.PRIMARY_TRANSPARENT}
                  disabled={!!feedback}
                  onPress={() => handleAnswerPress(answer.correct)}
                />
              ))}
              <Text style={questionFlowStyles.quizCounter}>{`${correctCount}/${totalCount}`}</Text>
            </ScrollView>
          ) : (
            <ScrollView style={dialogStyles.scroll} contentContainerStyle={dialogStyles.scrollContent}>
              <Text style={dialogStyles.dialogText}>{t(`common.roles.${currentDialog.speaker}`)}</Text>
              <Button
                style={dialogStyles.dialogButton}
                text={t(
                  `case1.scene3.assessmentDialogs.${assessmentId}.${phase === "followUpDialog" ? "followUpDialog" : "dialog"}.${currentDialog.id}`,
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

export default Scene3AssessmentFlowScreen;
