import { MessageVariant } from "@shared/enums/message-variant.enum";

export interface MessageProps {
  title: string;
  text?: string;
  variant?: MessageVariant;
}
