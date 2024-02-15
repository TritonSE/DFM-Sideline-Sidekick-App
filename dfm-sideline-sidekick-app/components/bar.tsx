import React, { useState } from "react";
// eslint-disable-next-line import/namespace
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { BookmarkIcon } from "../icons/bookmarkIcon";
import { CircleIcon } from "../icons/circleIcon";
import { GeneralPrinciplesIcon } from "../icons/generalPrinciplesIcon";

export type NavItem = {
  id: number;
  icon: string;
  onClick: () => void;
};

export const BottomNavBar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
    items.find((item) => item.id === itemId)?.onClick();
  };

  const styles = StyleSheet.create({
    bottomBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      padding: 8,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 79,
    },
  });

  return (
    <View style={styles.bottomBar}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            handleItemClick(item.id);
          }}
        >
          {item.icon === "search" ? (
            <View style={{ top: -26.65 }}>
              <CircleIcon fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"} />
            </View>
          ) : item.icon === "bookmark" ? (
            <BookmarkIcon fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"} />
          ) : (
            <GeneralPrinciplesIcon fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
