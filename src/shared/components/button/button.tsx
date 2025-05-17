import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { ButtonProps } from "../../types/button.type";
import { baseStyles, buttonVariants } from "./styles/button.styles";
import { ButtonType } from "../../enums/button-type.enum";

const Button: React.FC<ButtonProps> = ({ type = "primary", image, text, textStyle, style, onPress }) => {
  const variant = buttonVariants[type as ButtonType];
  const isImageOnly = !!image && !text;

  return (
    <TouchableOpacity
      style={[baseStyles.button, variant.button, isImageOnly && { backgroundColor: "transparent" }, style]}
      onPress={onPress}
    >
      {image && <Image source={image} style={baseStyles.image} />}
      {text && <Text style={[baseStyles.text, variant.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
