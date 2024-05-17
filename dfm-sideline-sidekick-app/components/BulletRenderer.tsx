import React from "react";
import { Text, View } from "react-native";

import styles from "./BulletRendererStyles";

type StringValue = string | string[] | { [key: string]: StringValue } | undefined;

type Props = {
  data: StringValue;
  level: number;
};

const renderSubpoint = (subpoint: string, index = 0, level = 0) => {
  //   const subpoints = subpointsString.split("\n");

  const markers = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // Level 0 markers
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], // Level 1 markers
    ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], // Level 2 markers
  ];

  // ensure the level has defined markers, if not, default to numeric
  const currentMarkers = markers[level] || markers[0];

  return (
    <View key={`${level}-${index}`} style={{ paddingLeft: level * 20 }}>
      <Text style={styles.point}>
        {`${currentMarkers[index % currentMarkers.length]}. `}
        {subpoint}
      </Text>
      {/* {subpoint.subpoints && (
            <View style={{ paddingLeft: 20 }}>{renderSubpoints(subpoint.subpoints, level + 1)}</View>
          )} */}
    </View>
  );
};

const BulletList: React.FC<{ items: string[]; level: number }> = ({ items, level }) => (
  <View style={styles.list}>
    {items.map((item: string, index: number) => (
      <View key={index} style={styles.listItem}>
        {/* <Text style={styles.bullet}>{"\u2022"}</Text>
        <Text style={styles.itemText}>{item}</Text> */}
        <View style={styles.subpoints}>{item && renderSubpoint(item, index, level)}</View>
      </View>
    ))}
  </View>
);

const BulletRenderer: React.FC<Props> = ({ data, level }) => {
  if (Array.isArray(data) && data.every((item) => typeof item === "string")) {
    return <BulletList items={data} level={level} />;
  } else if (typeof data === "object") {
    return (
      <View>
        {Object.keys(data).map((key, index) => (
          <View key={index}>
            <View style={styles.subpoints}>{key && renderSubpoint(key, index, level)}</View>
            {/* <Text style={styles.descriptionTitle}>{key}</Text> */}
            {/* <Text style={styles.descriptionTitle}>{key && renderSubpoint(key, index, level)}</Text> */}
            <BulletRenderer data={data[key] as StringValue} level={level + 1} />
          </View>
        ))}
      </View>
    );
  }
  return null;
};

export default BulletRenderer;
