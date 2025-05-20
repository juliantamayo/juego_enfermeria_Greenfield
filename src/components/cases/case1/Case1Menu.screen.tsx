import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Header from "@shared/components/header/header.component";
import { useAppNavigation } from "@navigation/hooks/useAppNavigation";
import { useScreenTitle } from "@shared/hooks/useScreenTitle";
import { GlobalStyles } from "@styles-theme";

const Case1MenuScreen = () => {
  const navigation = useAppNavigation();
  useScreenTitle("commom.titlePage.Case1Menu");

  return (
    <ImageBackground source={require("@images/layout/background.png")} style={GlobalStyles.container}>
      <Header
        leftButtons={[
          {
            iconName: "arrow-undo-outline",
            onPress: () => navigation.goBack(),
          },
        ]}
        rightButtons={[
          {
            iconName: "game-controller-outline",
            onPress: () => console.log("Minigames clicked"),
          },
        ]}
      />
      <View style={styles.container}>
        <Text>componentName</Text>
      </View>
    </ImageBackground>
  );
};

export default Case1MenuScreen;

const styles = StyleSheet.create({
  container: {},
});
