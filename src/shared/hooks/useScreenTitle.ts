import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

/**
 * Hook that dynamically updates the screen title
 * based on the current language and a translation key.
 *
 * @param translationKey The key from the translation file (e.g., "commom.titlePage.settings")
 */
export const useScreenTitle = (translationKey: string) => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      title: t(translationKey),
    });
  }, [i18n.language, t, translationKey, navigation]);
};
