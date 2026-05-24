import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { Colors, GlobalStyles, Spacing, Typography } from "@styles-theme";

const Scene6Screen = () => {
  const navigation = useAppNavigation();

  useScreenTitle("case1.scene6.screenTitle");

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
        <View style={styles.content}>
          <Text style={styles.title}>Scene 6 de prueba</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Scene6Screen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.lg,
  },
  title: {
    color: Colors.text.default,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    textAlign: "center",
  },
});
