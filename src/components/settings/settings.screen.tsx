import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LanguageSelectorModal from "@shared/components/languageSelector/languageSelector.component";
import { useTranslation } from "react-i18next";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";

const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();

  useScreenTitle("commom.titlePage.settings");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("settings.title")}</Text>
      <Text style={styles.developer}>{t("settings.credits.developer")}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>{t("settings.changeLanguage")}</Text>
      </TouchableOpacity>

      <LanguageSelectorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectLanguage={(lang) => {
          i18n.changeLanguage(lang);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  developer: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    padding: 12,
    backgroundColor: "#36b1f0",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
