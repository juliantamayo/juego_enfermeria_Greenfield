import { useFocusEffect } from "@react-navigation/native";
import { BackHandler, Alert } from "react-native";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

interface ExitBackOptions {
  titleKey?: string;
  messageKey?: string;
}

export const useExitOnBack = (options?: ExitBackOptions) => {
  const { t } = useTranslation();
  const {
    titleKey = "exit.title", // default key (dictionary)
    messageKey = "exit.message", // default key (dictionary)
  } = options || {};

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert(t(titleKey), t(messageKey), [
          { text: t("exit.cancel"), style: "cancel" },
          { text: t("exit.confirm"), onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const handler = BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => handler.remove();
    }, [t, titleKey, messageKey])
  );
};
