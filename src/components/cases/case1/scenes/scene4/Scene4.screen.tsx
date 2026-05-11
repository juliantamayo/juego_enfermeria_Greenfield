import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Spacing, Typography } from "@styles-theme";

const Scene4Screen = () => {
  const navigation = useAppNavigation();

  useScreenTitle("case1.scene4");

  return (
    <ImageBackground source={require("@images/layout/background.png")} style={GlobalStyles.container} resizeMode="contain">
      <Header
        leftButtons={[
          {
            iconName: "arrow-undo-outline",
            onPress: () => navigation.goBack(),
          },
        ]}
        rightButtons={[
          {
            iconName: "help-outline",
            onPress: () => console.log("Help clicked"),
          },
        ]}
      />
      <View style={GlobalStyles.body}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: Spacing.lg,
          }}
        >
          <Text
            style={{
              color: Colors.text.default,
              fontSize: Typography.fontSize.xl,
              fontWeight: Typography.fontWeight.bold,
              textAlign: "center",
            }}
          >
            Scene 4 de prueba
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Scene4Screen;
