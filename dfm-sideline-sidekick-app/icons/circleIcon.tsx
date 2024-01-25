import { SearchIcon } from '../icons/searchIcon';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg, Circle, G } from 'react-native-svg'; // Import G from react-native-svg

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export const CircleIcon = ({fillColor}) => {
  const circleRadius = 44.6533;
  const circleCenterX = 45;
  const circleCenterY = 45.4382;

  return (
    <View style={styles.container}>
      <Svg width={89.307} height={89.307}  viewBox="0 0 90 91" fill="none">
        {/* Draw the Circle */}
        <Circle cx={circleCenterX} cy={circleCenterY} r={circleRadius} fill={fillColor} />

        {/* Draw the SearchIcon within a G element */}
        <G transform={`translate(${circleCenterX - 20}, ${circleCenterY - 20})`}>
          <SearchIcon />
        </G>
      </Svg>
    </View>
  );
};



