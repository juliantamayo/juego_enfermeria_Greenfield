import type { FC } from "react";
import { Text, View } from "react-native";
import type { ProgressBarProps } from "@shared/types/progress-bar.type";
import { styles } from "./styles/progress-bar.styles";

const ProgressBar: FC<ProgressBarProps> = ({ value, max, label, style, trackWrapperStyle }) => {
  const safeMax = Math.max(max, 1);
  const clampedValue = Math.min(Math.max(value, 0), safeMax);
  const progressPercent = (clampedValue / safeMax) * 100;

  return (
    <View style={[styles.container, style]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.trackWrapper, trackWrapperStyle]}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progressPercent}%` }]} />
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
