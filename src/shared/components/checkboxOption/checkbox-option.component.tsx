import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { CheckboxOptionProps } from "@shared/types/checkbox-option.type";
import { CheckboxOptionStatus } from "@shared/enums/checkbox-option-status.enum";
import { Colors, Typography } from "@styles-theme";
import { styles, statusStyles } from "./styles/checkbox-option.styles";

const CheckboxOption: FC<CheckboxOptionProps> = ({
  label,
  selected,
  status = CheckboxOptionStatus.DEFAULT,
  feedback,
  disabled,
  style,
  onPress,
}) => {
  const isDisabled = disabled || status === CheckboxOptionStatus.DISABLED || !onPress;
  const shouldShowDisabledStyle = disabled || status === CheckboxOptionStatus.DISABLED;
  const shouldShowSelectedStyle = selected && status === CheckboxOptionStatus.DEFAULT;
  const currentStatus = statusStyles[status];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.container,
        currentStatus.container,
        shouldShowSelectedStyle && styles.selectedContainer,
        shouldShowDisabledStyle && styles.disabled,
        style,
      ]}
    >
      <View style={[styles.checkbox, selected && styles.checkboxSelected, currentStatus.checkbox]}>
        {selected && (
          <Ionicons name="checkmark" size={Typography.iconSize.md} color={Colors.text.inverse} />
        )}
      </View>

      <View style={styles.content}>
        <Text style={[styles.label, currentStatus.label]}>{label}</Text>
        {!!feedback && <Text style={[styles.feedback, currentStatus.feedback]}>{feedback}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export { CheckboxOptionStatus };
export default CheckboxOption;
