import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Colors } from "@styles-theme";

type FeedbackAlertProps = {
  correct: boolean;
  visible: boolean;
};

const screen = Dimensions.get("window");

const feedbackIcons = {
  correct: require("@images/check.png"),
  incorrect: require("@images/close.png"),
};

const FeedbackAlert = ({ correct, visible }: FeedbackAlertProps) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.circle, correct && styles.circleCorrect]}>
        <Image source={correct ? feedbackIcons.correct : feedbackIcons.incorrect} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};

export default FeedbackAlert;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  circle: {
    alignItems: "center",
    backgroundColor: Colors.status.error,
    borderRadius: screen.width / 2,
    height: screen.width / 2,
    justifyContent: "center",
    width: screen.width / 2,
  },
  circleCorrect: {
    backgroundColor: Colors.status.success,
  },
  icon: {
    width: screen.width / 3,
  },
});
