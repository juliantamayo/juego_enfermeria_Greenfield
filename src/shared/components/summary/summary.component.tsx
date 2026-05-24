import type { FC } from "react";
import { Text, View } from "react-native";
import type { SummaryProps } from "@shared/types/summary.type";
import { styles } from "./styles/summary.styles";

const Summary: FC<SummaryProps> = ({ eyebrow, title, description, counterLabel, counterValue, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      {!!description && <Text style={styles.description}>{description}</Text>}

      <View style={styles.counter}>
        <Text style={styles.counterLabel}>{counterLabel}</Text>
        <Text style={styles.counterValue}>{counterValue}</Text>
      </View>
    </View>
  );
};

export default Summary;
