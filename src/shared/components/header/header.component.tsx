import React from "react";
import { View, ViewStyle, ImageSourcePropType } from "react-native";
import Button from "@shared/components/button/button.component";
import { ButtonType } from "@shared/enums/button-type.enum";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Typography } from "@styles-theme";
import { headerStyles } from "./styles/header.styles";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

const DEFAULT_ICON_SIZE = Typography.iconSize.xl;

interface HeaderButton {
  iconName?: IoniconsName;
  iconSize?: number;
  iconColor?: string;
  img?: ImageSourcePropType;
  onPress: () => void;
}

interface HeaderProps {
  leftButtons?: HeaderButton[];
  rightButtons?: HeaderButton[];
  style?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({ leftButtons = [], rightButtons = [], style }) => {
  return (
    <View style={[headerStyles.header, style]}>
      <View style={headerStyles.sideColumn}>
        {leftButtons.map((btn, idx) => (
          <Button
            key={`left-${idx}`}
            iconName={btn.iconName}
            iconSize={btn.iconSize ?? DEFAULT_ICON_SIZE}
            iconColor={btn.iconColor}
            image={btn.img}
            type={ButtonType.PRIMARY}
            style={headerStyles.button}
            onPress={btn.onPress}
          />
        ))}
      </View>

      <View style={headerStyles.sideColumn}>
        {rightButtons.map((btn, idx) => (
          <Button
            key={`right-${idx}`}
            iconName={btn.iconName}
            iconSize={btn.iconSize ?? DEFAULT_ICON_SIZE}
            iconColor={btn.iconColor}
            image={btn.img}
            type={ButtonType.PRIMARY}
            style={headerStyles.button}
            onPress={btn.onPress}
          />
        ))}
      </View>
    </View>
  );
};

export default Header;
