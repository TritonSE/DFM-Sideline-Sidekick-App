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
    // Test Case: Cervical Spine Injury
    const emergencyObjectId = "65b36d110c9c60394b37f7a1"; // Replace with the actual ID
    //Separate Test Case here: To Be Deleted Emergency
    //const emergencyObjectId = "65b369a8e8fe96a404d4fd6b"; // Replace with the actual ID

    navigation.navigate("Conditions", { emergencyObjectId });
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>Navigate to ConditionsSection</Text>
    </Pressable>
  );
}
