import type { ComponentProps, FC } from "react";
import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Typography } from "@styles-theme";
import { styles } from "./styles/group-option.styles";

type GroupOptionProps = {
  title: string;
  description?: string;
  iconName?: ComponentProps<typeof Ionicons>["name"];
  image?: ImageSourcePropType;
  compact?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const GroupOption: FC<GroupOptionProps> = ({
  title,
  description,
  iconName,
  image,
  compact,
  disabled,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled || !onPress}
      onPress={onPress}
      style={[styles.option, compact && styles.compactOption, disabled && styles.disabled, style]}
    >
      {(image || iconName) && (
        <View style={[styles.media, compact && styles.compactMedia]}>
          {image ? (
            <Image source={image} style={styles.image} resizeMode="contain" />
          ) : (
            iconName && (
              <Ionicons
                name={iconName}
                size={compact ? Typography.iconSize.md : Typography.iconSize.xl}
                color={Colors.text.inverse}
              />
            )
          )}
        </View>
      )}
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      {!!description && (
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default GroupOption;
