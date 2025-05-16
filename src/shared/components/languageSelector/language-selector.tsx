import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Language } from '../../enums/language.enum';
import { useTranslation } from 'react-i18next';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelectLanguage: (lang: Language) => void;
}

const LanguageSelectorModal: React.FC<Props> = ({ visible, onClose, onSelectLanguage }) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{t('settings.changeLanguage')}</Text>

          <TouchableOpacity style={styles.button} onPress={() => onSelectLanguage(Language.SPANISH)}>
            <Text style={styles.buttonText}>{t('language.spanish')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onSelectLanguage(Language.ENGLISH)}>
            <Text style={styles.buttonText}>{t('language.english')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={onClose}>
            <Text style={styles.buttonText}>{t('settings.close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageSelectorModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00bcbc',
    borderRadius: 6,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
