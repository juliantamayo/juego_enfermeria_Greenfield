import type { FC } from "react";
import { Text, View } from "react-native";
import type { MessageProps } from "@shared/types/message.type";
import { MessageVariant } from "@shared/enums/message-variant.enum";
import { styles, variantStyles } from "./styles/message.styles";

const Message: FC<MessageProps> = ({ title, text, variant = MessageVariant.INFO }) => {
  const currentVariant = variantStyles[variant];

  return (
    <View style={[styles.container, currentVariant.container]}>
      <Text style={[styles.title, currentVariant.title]}>{title}</Text>
      {!!text && <Text style={[styles.text, currentVariant.text]}>{text}</Text>}
    </View>
  );
};

export { MessageVariant };
export default Message;
