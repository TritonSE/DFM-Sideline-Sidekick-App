import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Subpoint = {
  text: string;
  subpoints?: Subpoint[];
};

type BulletPointProps = {
  letter: string;
  text: string;
  subpoints?: Subpoint[];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  circle: {
    width: 24, // this should be a "props"-value in future
    height: 24, // this should be a "props"-value in future
    borderRadius: 24 / 2,
    backgroundColor: "#00629B",
    alignItems: "center",
    justifyContent: "center",
  },

  circleCaption: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  mainText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "700",
    paddingLeft: 5,
  },
  subpoints: {
    paddingTop: 5,
    paddingLeft: 38,
    paddingRight: 25,
  },
  point: {
    fontSize: 15,
  },
});

const BulletPoint: React.FC<BulletPointProps> = ({ letter, text, subpoints }) => {
  // render subpoints recursively
  const renderSubpoints = (subpoints: Subpoint[], level = 0) => {
    const markers = [
      ["1", "2", "3"], // Level 0 markers
      ["a", "b", "c"], // Level 1 markers
      ["i", "ii", "iii"], // Level 2 markers
    ];

    // ensure the level has defined markers, if not, default to numeric
    const currentMarkers = markers[level] || markers[0];

    return subpoints.map((subpoint, index) => (
      <View key={`${level}-${index}`} style={{ paddingLeft: level * 20 }}>
        <Text style={styles.point}>
          {`${currentMarkers[index % currentMarkers.length]}. `}
          {subpoint.text}
        </Text>
        {subpoint.subpoints && (
          <View style={{ paddingLeft: 20 }}>{renderSubpoints(subpoint.subpoints, level + 1)}</View>
        )}
      </View>
    ));
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.circleCaption}>{letter}</Text>
        </View>
        <Text style={styles.mainText}>{text}</Text>
      </View>
      <View style={styles.subpoints}>{subpoints && renderSubpoints(subpoints)}</View>
    </View>
  );
};

export default BulletPoint;
