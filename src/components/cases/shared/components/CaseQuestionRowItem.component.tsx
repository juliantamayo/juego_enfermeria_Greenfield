import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius, Spacing, Typography } from "@styles-theme";

type CaseQuestionRowItemProps = {
  name: string;
  color: string;
  completed?: boolean;
  onPress: () => void;
};

const CaseQuestionRowItem = ({ name, completed, onPress }: CaseQuestionRowItemProps) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.touchable}>
    <View style={[styles.row, completed && styles.completedRow]}>
      {completed && (
        <Ionicons
          name="checkmark-outline"
          size={Typography.iconSize.lg}
          color={Colors.brand.primary}
          style={styles.checkIcon}
        />
      )}
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
    backgroundColor: Colors.brand.white,
    borderColor: Colors.brand.primary,
    borderWidth: 1,
  },
  completedRow: {
    paddingRight: Typography.iconSize.lg + Spacing.xl,
  },
  checkIcon: {
    position: "absolute",
    top: Spacing.sm,
    right: Spacing.sm,
  },
  text: {
    color: Colors.grayscale.gray600,
    fontSize: Typography.fontSize.mlg,
    fontWeight: Typography.fontWeight.medium,
    textAlign: "center",
  },
});
