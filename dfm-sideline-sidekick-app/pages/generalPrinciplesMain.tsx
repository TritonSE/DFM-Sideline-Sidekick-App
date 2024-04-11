import { useNavigation } from "@react-navigation/native";

import * as Font from "expo-font";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { getGeneralPrinciple } from "../generalPrinciple";


import SearchPage from "./SearchPage";
import styles from "./generalPrinciplesMainStyles";
const GeneralPrinciplesMain = () => {
  const navigation = useNavigation()
  const [generalPrinciple, setGeneralPrinciple] = useState(null);

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

  useEffect(() => {
    async function fetchGeneralPrinciple() {
      try {
        //It seems to work on Android and iPad
        //Test Case: Cervical Spine Injury - demonstrate recursive rendering
        const generalPrincipleObjectId = "65c586d1f922fa885e8208bd";
        //Separate Test Case here: To Be Deleted Emergency - demonstrates textual rendering
        //const emergencyObjectId = "65b369a8e8fe96a404d4fd6b";
        //Test Case: New Emergency Placeholder Four - demonstrates blank rendering (only title in db)
        //const emergencyObjectId = "65c2ef26b87b638ac61beb09";
        //Test Case: Cervical Strain - demonstrates simple placeholder headers
        //const emergencyObjectId = "65b36f12640d62464e0dd129";
        const result = await getGeneralPrinciple(generalPrincipleObjectId);
        if (result.success) {
          setGeneralPrinciple(result.data);
        } else {
          console.error("Error fetching general principle data:", result.error);
        }
      } catch (error) {
        console.error("Error fetching general principle data:", error);
      }
    }

    void fetchGeneralPrinciple();
  }, []);

  const handlePress = () => {
    if (generalPrinciple !== null) {
      navigation.navigate("GeneralPrinciples", { generalPrinciple })
    }
  }

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const convertToScreenName = (label: string): string => {
    return label.replace(/\s+(\w)/g, (_, match) => match.toUpperCase());
  }


  const renderPressables = () => {
    const pressableData = [
      ["Emergency Action Plan", "Trauma Centers"],
      ["Burn Centers", "Stroke Centers"],
      ["Inclement Weather", "Serious On-Field Injury"],
      ["Catastrophic Incident", "Administering Medication"],
      ["Muscle Injuries", "Ligament Injuries"],
      ["Dislocations Subluxations", "Fractures"],
    ];

    return pressableData.map((row, index) => (
      <View key={index} style={styles.row}>
        {row.map((label, colIndex) => (
          <Pressable key={`${index}-${colIndex}`} style={styles.pressable} onPress={handlePress}>
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
      <SearchPage onPage={searchShowing} setShowing={setSearchShowing} />
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
