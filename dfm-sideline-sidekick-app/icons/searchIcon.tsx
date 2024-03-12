import { StyleSheet, View } from "react-native";
import { Path, Svg } from "react-native-svg";

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export const SearchIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Svg width={40} height={40} viewBox="0 0 40 41" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3333 7.1051C11.89 7.1051 6.66667 12.3284 6.66667 18.7718C6.66667 25.2151 11.89 30.4384 18.3333 30.4384C20.9539 30.4384 23.3727 29.5744 25.3203 28.1157L30.4882 33.2836C31.139 33.9345 32.1943 33.9345 32.8452 33.2836C33.4961 32.6327 33.4961 31.5775 32.8452 30.9266L27.6773 25.7587C29.136 23.8111 30 21.3923 30 18.7718C30 12.3284 24.7767 7.1051 18.3333 7.1051ZM10 18.7718C10 14.1694 13.731 10.4384 18.3333 10.4384C22.9357 10.4384 26.6667 14.1694 26.6667 18.7718C26.6667 23.3741 22.9357 27.1051 18.3333 27.1051C13.731 27.1051 10 23.3741 10 18.7718Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};
