import { View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

export const ArrowIcon = () => {
  return (
    <View>
      <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <Circle cx="9.5" cy="9.5" r="9.4" fill="#E5EFF5" stroke="black" stroke-width="0.2" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7908 10.4714C14.0697 10.2111 14.0697 9.78895 13.7908 9.5286L10.2194 6.19526C9.94042 5.93491 9.48816 5.93491 9.20921 6.19526C8.93026 6.45561 8.93026 6.87772 9.20921 7.13807L11.5613 9.33333L4.71429 9.33333C4.3198 9.33333 4 9.63181 4 10C4 10.3682 4.3198 10.6667 4.71429 10.6667L11.5613 10.6667L9.20921 12.8619C8.93026 13.1223 8.93026 13.5444 9.20921 13.8047C9.48815 14.0651 9.94042 14.0651 10.2194 13.8047L13.7908 10.4714Z"
          fill="#182B49"
        />
      </Svg>
    </View>
  );
};
