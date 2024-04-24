import * as Font from "expo-font";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import SearchPage from "./SearchPage";
import styles from "./generalPrinciplesMainStyles";

const GeneralPrinciplesMain = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [searchShowing, setSearchShowing] = useState(false);

  React.useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    void loadFont();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const renderPressables = () => {
    const pressableData = [
      ["Emergency Action Plan", "Trauma Centers"],
      ["Burn Centers", "Stroke Centers"],
      ["Inclement Weather", "Serious On-Field Injury"],
      ["Catastrophic Incident", "Administering Medication"],
      ["Muscle Injuries", "Ligament Injuries"],
      ["Dislocations/Subluxations", "Fractures"],
    ];

    return pressableData.map((row, index) => (
      <View key={index} style={styles.row}>
        {row.map((label, colIndex) => (
          <Pressable key={`${index}-${colIndex}`} style={styles.pressable}>
            <Text style={styles.pressableText} numberOfLines={0}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
    ));
  };

  return (
    <View>
      <SearchPage title="General Principles" onPage={searchShowing} setShowing={setSearchShowing} />
      {!searchShowing && (
        <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.subheader}>
              <Text style={styles.subheaderText}>Browse by Category</Text>
            </View>
            <View style={styles.grid}>{renderPressables()}</View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default GeneralPrinciplesMain;
