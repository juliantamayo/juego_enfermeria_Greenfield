import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LanguageSelectorModal from '@shared/components/languageSelector/language-selector';


const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credits</Text>
      <Text style={styles.developer}>Developed by Julian</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Change Language</Text>
      </TouchableOpacity>

      <LanguageSelectorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectLanguage={(lang) => {
          // Temporalmente, puedes solo cerrar el modal
          // Luego cuando agreguemos i18n, lo configuramos aquí
          console.log('Selected language:', lang);
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  developer: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    padding: 12,
    backgroundColor: '#36b1f0',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
