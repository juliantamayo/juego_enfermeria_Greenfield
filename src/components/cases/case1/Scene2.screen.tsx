import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface componentNameProps {}

const Scene2Screen = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

export default Scene2Screen;

const styles = StyleSheet.create({
  container: {},
});
