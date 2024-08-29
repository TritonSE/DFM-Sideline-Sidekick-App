import { useNavigationState } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

// import { BookmarkIcon } from "../icons/bookmarkIcon";
import { CircleIcon } from "../icons/circleIcon";
import { GeneralPrinciplesIcon } from "../icons/generalPrinciplesIcon";
import { HomeIcon } from "../icons/homeIcon";

import styles from "./barStyles";

export type NavItem = {
  id: number;
  routeName: string;
  icon: string;
  onClick: () => void;
};

export const BottomNavBar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(1);
  const currentRouteName = useNavigationState((state) => {
    if (state !== undefined && state !== null) {
      return state.routes[state.index].name;
    }
  });

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
    items.find((item) => item.id === itemId)?.onClick();
  };

  useEffect(() => {
    const currentItem = items.find((item) => item.routeName === currentRouteName);
    if (currentItem !== undefined) {
      handleItemClick(currentItem.id);
    }
  }, [currentRouteName]);

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
              <CircleIcon fillColor="#001F3F" />
            </View>
          ) : item.icon === "home" ? (
            <HomeIcon fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"} />
          ) : (
            <View style={{ width: 29 }}>
              <GeneralPrinciplesIcon
                fillColor={selectedItemId === item.id ? "#001F3F" : "#C0C8CB"}
              />
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
