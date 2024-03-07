import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import SearchBarComponent from "./GlobalSearch";
import styles from "./generalPrinciplesMainStyles";

const GeneralPrinciplesMain = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
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
            <Text style={styles.pressableText}>{label}</Text>
          </Pressable>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaView>
      <SearchBarComponent title="General Principles" />
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.subheader}>
            <Text style={styles.subheaderText}>Browse by Category</Text>
          </View>
          <View style={styles.grid}>{renderPressables()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GeneralPrinciplesMain;
