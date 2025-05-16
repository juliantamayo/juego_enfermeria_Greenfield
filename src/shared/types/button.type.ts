import { TextStyle, ViewStyle, ImageSourcePropType } from 'react-native';
import { ButtonType } from '../enums/button-type.enum';

export interface ButtonProps {
  type?: ButtonType;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  image?: ImageSourcePropType;
  text?: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
}
