import PropTypes from "prop-types";
// eslint-disable-next-line import/namespace
import { StyleSheet, View } from "react-native";
import { Circle, G, Svg } from "react-native-svg";

import { SearchIcon } from "../icons/searchIcon";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export const CircleIcon = ({ fillColor }) => {
  const circleRadius = 44.6533;
  const circleCenterX = 45;
  const circleCenterY = 45.4382;

  return (
    <View style={styles.container}>
      <Svg width={89.307} height={89.307} viewBox="0 0 90 91" fill="none">
        <Circle cx={circleCenterX} cy={circleCenterY} r={circleRadius} fill={fillColor as string} />

        <G transform={`translate(${circleCenterX - 20}, ${circleCenterY - 20})`}>
          <SearchIcon />
        </G>
      </Svg>
    </View>
  );
};

CircleIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
};
