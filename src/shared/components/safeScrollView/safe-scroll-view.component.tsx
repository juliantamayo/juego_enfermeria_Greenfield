import type { FC } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { SafeScrollViewProps } from "@shared/types/safe-scroll-view.type";

const SafeScrollView: FC<SafeScrollViewProps> = ({
  bottomOffset = 0,
  contentContainerStyle,
  children,
  ...scrollViewProps
}) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      {...scrollViewProps}
      contentContainerStyle={[contentContainerStyle, { paddingBottom: bottomOffset + insets.bottom }]}
    >
      {children}
    </ScrollView>
  );
};

export default SafeScrollView;
