import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface componentNameProps {}

const Scene3Screen = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

export default Scene3Screen;

const styles = StyleSheet.create({
  container: {},
});
