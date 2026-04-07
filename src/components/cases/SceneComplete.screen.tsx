import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Header from "@shared/components/header/header.component";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import type { RootStackParamList } from "@navigation/types";
import { Colors, GlobalStyles, Radius, Spacing, Typography } from "@styles-theme";
import { saveSceneProgress } from "./shared/utils/progress.utils";

type SceneCompleteRouteProp = RouteProp<RootStackParamList, "SceneCompleteScreen">;

const SceneCompleteScreen = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<SceneCompleteRouteProp>();
  const { t } = useTranslation();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await saveSceneProgress(params.caseId, params.completedSceneId, params.nextSceneId);

      Alert.alert(t("common.sceneComplete.savedTitle"), t("common.sceneComplete.savedMessage"), [
        {
          text: "OK",
          onPress: () => navigation.navigate(params.returnScreen),
        },
      ]);
    } catch (error) {
      console.error("Error saving progress", error);
      Alert.alert(t("common.sceneComplete.errorTitle"), t("common.sceneComplete.errorMessage"));
    } finally {
      setIsSaving(false);
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
      />
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.title}>{t("common.sceneComplete.title")}</Text>
          <Text style={styles.message}>{t("common.sceneComplete.message")}</Text>
          <Button
            text={isSaving ? t("common.sceneComplete.savingButton") : t("common.sceneComplete.saveButton")}
            type={ButtonType.ACTION}
            onPress={handleSave}
            disabled={isSaving}
            style={styles.button}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SceneCompleteScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
  },
  card: {
    width: "100%",
    backgroundColor: Colors.background.default,
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    alignItems: "center",
    gap: Spacing.lg,
  },
  title: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    textAlign: "center",
  },
  message: {
    color: Colors.text.bodyText,
    fontSize: Typography.fontSize.md,
    textAlign: "center",
  },
  button: {
    width: "100%",
  },
});
