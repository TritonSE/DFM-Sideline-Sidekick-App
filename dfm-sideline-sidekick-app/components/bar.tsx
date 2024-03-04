import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

// import { BookmarkIcon } from "../icons/bookmarkIcon";
import { HomeIcon } from "../icons/homeIcon";
import { CircleIcon } from "../icons/circleIcon";
import { GeneralPrinciplesIcon } from "../icons/generalPrinciplesIcon";

import styles from "./barStyles";

export type NavItem = {
  id: number;
  icon: string;
  onClick: () => void;
};

export const BottomNavBar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(2);

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
    items.find((item) => item.id === itemId)?.onClick();
  };

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
          ) : item.icon === "home" ? (
            <HomeIcon fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"} />
          ) : (
            <GeneralPrinciplesIcon fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
