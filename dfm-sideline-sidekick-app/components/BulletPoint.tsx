import React from "react";
import { StyleSheet, Text, View } from "react-native";

type BulletPointProps = {
  letter: string;
  text: string;
  subpoints?: string[];
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
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.circleCaption}>{letter}</Text>
        </View>
        <Text style={styles.mainText}>{text}</Text>
      </View>
      <View>
        {subpoints && subpoints.length > 0 && (
          <View style={styles.subpoints}>
            {subpoints.map((item, index) => (
              <Text style={styles.point} key={index}>{`${index + 1}. ${item}`}</Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default BulletPoint;
