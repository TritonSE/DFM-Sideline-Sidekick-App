import PropTypes from "prop-types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Text, View } from "react-native";

import styles from "./NumbersSectionStyles";

type Props = {
  property1: number;
};

export const NumbersSection = ({ property1 }: Props): JSX.Element => {
  return (
    <View style={styles.numbersSection}>
      <View style={styles.numbersSectionElement}>
        <Text style={styles.numbersSectionText}> {<>{property1}</>} </Text>
      </View>
    </View>
  );
};

NumbersSection.propTypes = {
  property1: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
