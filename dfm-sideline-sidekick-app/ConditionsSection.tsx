// import { useRoute } from "@react-navigation/native";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import styles from "./ConditionSectionStyles";
import StringRenderer from "./components/StringRenderer";
// import { getEmergency } from "./emergencies";

import type { Emergency } from "./emergencies";

export type RootStackParamList = {
  // Define the parameters for your screens here
  Conditions: { emergency: Emergency }; // Example parameter
} & ParamListBase;

// Define the type for the route parameters
type ConditionsScreenRouteProp = RouteProp<RootStackParamList, "Conditions">;

// Define the type for the navigation object
type ConditionsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Conditions">;

type Props = {
  route: ConditionsScreenRouteProp;
  navigation: ConditionsScreenNavigationProp;
};

type StringValue = string | string[] | { [key: string]: StringValue };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ConditionsSection({ route, navigation }: Props) {
  const [isOverviewPressed, setIsOverviewPressed] = useState<boolean>(true);
  const [isTreatmentPressed, setIsTreatmentPressed] = useState<boolean>(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);
  const [overviewHeaders, setOverviewHeaders] = useState<string[]>([]);
  const [overviewValues, setOverviewValues] = useState<StringValue[]>([]);
  const [treatmentHeaders, setTreatmentHeaders] = useState<string[]>([]);
  const [treatmentValues, setTreatmentValues] = useState<StringValue[]>([]);
  const [contentHeaders, setContentHeaders] = useState<string[]>([]);
  const [contentValues, setContentValues] = useState<StringValue[]>([]);

  const { params } = route; // Destructure params from the route object
  const [emergency, setEmergency] = useState<Emergency>();

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
        setIsFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    void loadFont();
  }, []);

  useEffect(() => {
    // if (params?.emergencyObjectId) {
    //   // Check if params and emergencyObjectId exist
    //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
    //   getEmergency(params.emergencyObjectId).then((result) => {
    //     if (result.success) {
    //       setEmergency(result.data);
    //     } else {
    //       console.error("Error fetching emergency data:", result.error);
    //     }
    //   });
    // }
    setEmergency(params.emergency);
  }, [params]); // Include params in the dependency array

  useEffect(() => {
    if (emergency?.overview && typeof emergency.overview === "object") {
      setOverviewHeaders(Object.keys(emergency.overview));
      setOverviewValues(Object.values(emergency.overview) as StringValue[]);
    }

    if (emergency?.treatment && typeof emergency.treatment === "object") {
      setTreatmentHeaders(Object.keys(emergency.treatment));
      setTreatmentValues(Object.values(emergency.treatment) as StringValue[]);
    }

    if (emergency?.content && typeof emergency.content === "object") {
      setContentHeaders(Object.keys(emergency.content));
      setContentValues(Object.values(emergency.content) as StringValue[]);
    }
  }, [emergency]);

  function onOverviewPress() {
    if (!isOverviewPressed) {
      setIsOverviewPressed(!isOverviewPressed);
      setIsTreatmentPressed(false);
    }
  }

  function onTreatmentPress() {
    if (!isTreatmentPressed) {
      setIsTreatmentPressed(!isTreatmentPressed);
      setIsOverviewPressed(false);
    }
  }

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image style={styles.image} source={require("./assets/ic_caretleft.png")} />
        <View style={styles.margin}>
          <Text style={styles.subtitle}>Medical Emergency</Text>
          {emergency && <Text style={styles.title}>{emergency.title}</Text>}
        </View>

        <View style={styles.menu}>
          <Pressable
            style={isOverviewPressed ? styles.menuButtonSelected : styles.menuButton}
            onPress={onOverviewPress}
          >
            <Text style={isOverviewPressed ? styles.menuTextSelected : styles.menuText}>
              Overview
            </Text>
          </Pressable>
          <Pressable
            style={isTreatmentPressed ? styles.menuButtonSelected : styles.menuButton}
            onPress={onTreatmentPress}
          >
            <Text style={isTreatmentPressed ? styles.menuTextSelected : styles.menuText}>
              How To Treat
            </Text>
          </Pressable>
        </View>

        <View style={styles.information}>
          <View style={isOverviewPressed ? styles.overview : styles.overviewHidden}>
            {emergency?.overview && typeof emergency.overview === "string" && (
              <View style={styles.infoSection}>
                <Text style={styles.descriptionInfo}>{emergency?.overview}</Text>
              </View>
            )}

            {emergency?.overview && typeof emergency.overview === "object" && (
              <View style={styles.infoSection}>
                {overviewHeaders.map((header, index) => (
                  <View key={index}>
                    <Text style={styles.descriptionTitle}>{header}</Text>
                    <StringRenderer data={overviewValues[index]} />
                  </View>
                ))}
              </View>
            )}
          </View>

          <View style={isTreatmentPressed ? styles.howToTreat : styles.howToTreatHidden}>
            {emergency?.treatment && typeof emergency.treatment === "string" && (
              <View style={styles.infoSection}>
                <Text style={styles.descriptionInfo}>{emergency?.treatment}</Text>
              </View>
            )}

            {emergency?.treatment && typeof emergency.treatment === "object" && (
              <View style={styles.infoSection}>
                {treatmentHeaders.map((header, index) => (
                  <View key={index}>
                    <Text style={styles.descriptionTitle}>{header}</Text>
                    <StringRenderer data={treatmentValues[index]} />
                  </View>
                ))}
              </View>
            )}

            {emergency?.content && typeof emergency.content === "string" && (
              <View style={styles.infoSection}>
                <Text style={styles.descriptionInfo}>{emergency?.content}</Text>
              </View>
            )}

            {emergency?.content && typeof emergency.content === "object" && (
              <View style={styles.infoSection}>
                {contentHeaders.map((header, index) => (
                  <View key={index}>
                    <Text style={styles.descriptionTitle}>{header}</Text>
                    <StringRenderer data={contentValues[index]} />
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
