import React from "react";
import { Text, View } from "react-native";

import styles from "./BulletPointStyles";

type ContentItem = Record<string, string>;

type BulletPointProps = {
  content: ContentItem;
};

const BulletPoint: React.FC<BulletPointProps> = ({ content }) => {
  // render subpoints recursively
  const renderSubpoints = (subpointsString: string, level = 0) => {
    const subpoints = subpointsString.split("\n");

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
          {subpoint}
        </Text>
        {/* {subpoint.subpoints && (
          <View style={{ paddingLeft: 20 }}>{renderSubpoints(subpoint.subpoints, level + 1)}</View>
        )} */}
      </View>
    ));
  };

  return (
    <View>
      {Object.entries(content).map(([key, value], index) => (
        <View key={key}>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Text style={styles.circleCaption}>{String.fromCharCode(65 + index)}</Text>
            </View>
            <Text style={styles.mainText}>{key}</Text>
          </View>
          <View style={styles.subpoints}>{value && renderSubpoints(value)}</View>
        </View>
      ))}
    </View>
    // <View>
    //   {Object.entries(content).map(([key, value]) => (
    //     <View key={key}>
    //       <Text style={{ fontWeight: 'bold' }}>{key}</Text>
    //       <Text>{value}</Text>
    //     </View>
    //   ))}

    //     <View style={styles.container}>
    //       <View style={styles.circle}>
    //         <Text style={styles.circleCaption}>{letter}</Text>
    //       </View>
    //       <Text style={styles.mainText}>{text}</Text>
    //     </View>
    //     <View style={styles.subpoints}>{initSubpoints && renderSubpoints(initSubpoints)}</View>
    // </View>
  );
};

export default BulletPoint;
