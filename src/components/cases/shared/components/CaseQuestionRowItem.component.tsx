import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

type CaseQuestionRowItemProps = {
  name: string;
  color: string;
  onPress: () => void;
};

const CaseQuestionRowItem = ({ name, color, onPress }: CaseQuestionRowItemProps) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.touchable}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default CaseQuestionRowItem;

const styles = StyleSheet.create({
  touchable: {
    width: "100%",
  },
  row: {
    width: "100%",
    minHeight: 72,
    borderRadius: Radius.md,
    justifyContent: "center",
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
  },
  text: {
    color: Colors.text.inverse,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.medium,
    textAlign: "center",
  },
});
