import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ButtonProps } from "../../types/button.type";
import { ButtonType } from "../../enums/button-type.enum";
import { Typography } from "@styles-theme";
import { baseStyles, buttonVariants } from "./styles/button.styles";

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.PRIMARY,
  iconName,
  iconSize = Typography.iconSize.md,
  iconColor = "#006d6d ",
  image,
  text,
  textStyle,
  style,
  onPress,
}) => {
  const variant = buttonVariants[type as ButtonType];
  const isImageOnly = !!image && !text;

  return (
    <TouchableOpacity
      style={[baseStyles.button, variant.button, isImageOnly && { backgroundColor: "transparent" }, style]}
      onPress={onPress}
    >
      {iconName && <Ionicons name={iconName} size={iconSize} color={iconColor} />}
      {image && <Image source={image} style={baseStyles.image} />}
      {text && <Text style={[baseStyles.text, variant.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
