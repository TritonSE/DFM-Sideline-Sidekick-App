import { useNavigation } from "@react-navigation/native";
// import { useRoute } from "@react-navigation/native";
// import * as Font from "expo-font";
// import { useEffect, useState } from "react";
// import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
// eslint-disable-next-line import/namespace
import { Pressable, Text } from "react-native";
// import styles from "./ConditionSectionStyles";
// import { getEmergency } from "./emergencies";

// import type { Emergency } from "./emergencies";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    //NOTE TO REVIEWERS: Try the test cases below with different document ids and see if they work on your devices and emulators
    //It seems to work on Android and iPad
    //Test Case: Cervical Spine Injury - demonstrate recursive rendering
    const emergencyObjectId = "65b36d110c9c60394b37f7a1";
    //Separate Test Case here: To Be Deleted Emergency - demonstrates textual rendering
    //const emergencyObjectId = "65b369a8e8fe96a404d4fd6b";
    //Test Case: New Emergency Placeholder Four - demonstrates blank rendering (only title in db)
    //const emergencyObjectId = "65c2ef26b87b638ac61beb09";
    //Test Case: Cervical Strain - demonstrates simple placeholder headers
    //const emergencyObjectId = "65b36f12640d62464e0dd129";
    navigation.navigate("Conditions", { emergencyObjectId });
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>Navigate to ConditionsSection</Text>
    </Pressable>
  );
}
