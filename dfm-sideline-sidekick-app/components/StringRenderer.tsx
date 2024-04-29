import React from "react";
import { Text, View } from "react-native";

import styles from "../pages/ConditionSectionStyles";

type StringValue = string | string[] | { [key: string]: StringValue } | undefined;

type Props = {
  data: StringValue;
};

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <View style={styles.list}>
    {items.map((item: string, index: number) => (
      <View key={index} style={styles.listItem}>
        <Text style={styles.bullet}>{"\u2022"}</Text>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    ))}
  </View>
);

const StringRenderer: React.FC<Props> = ({ data }) => {
  if (typeof data === "string") {
    return <Text style={styles.descriptionInfo}>{data}</Text>;
  } else if (Array.isArray(data) && data.every((item) => typeof item === "string")) {
    return <BulletList items={data} />;
  } else if (typeof data === "object") {
    return (
      <View>
        {Object.keys(data).map((key, index) => (
          <View key={index}>
            <Text style={styles.descriptionInfo}>{key}</Text>
            <StringRenderer data={data[key] as StringValue} />
          </View>
        ))}
      </View>
    );
  }
  return null;
};

export default StringRenderer;
