import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ButtonType } from '../../../enums/button-type.enum';

const baseStyles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
});

type VariantStyles = {
  button: ViewStyle;
  text: TextStyle;
};

const buttonVariants: Record<ButtonType, VariantStyles> =  {
  [ButtonType.PRIMARY]: StyleSheet.create({
    button: { backgroundColor: '#00bcbc' },
    text: { color: '#fff' },
  }),
  [ButtonType.SECONDARY]: StyleSheet.create({
    button: { backgroundColor: '#aaa' },
    text: { color: '#000' },
  }),
  [ButtonType.ACTION]: StyleSheet.create({
    button: { backgroundColor: '#fbe122' },
    text: { color: '#333' },
  }),
};

export { baseStyles, buttonVariants };
