// import { useRoute } from "@react-navigation/native";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Font from "expo-font";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import BulletPoint from "../components/BulletPoint";

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import StringRenderer from "../components/StringRenderer";
import { Bookmark } from "../components/bookmark";

import styles from "./EmergencyPrinciplesStyles";

import type { GeneralPrinciple } from "../generalPrinciples";

export type RootStackParamList = {
  // Define the parameters for your screens here
  Conditions: { generalPrinciple: GeneralPrinciple }; // Example parameter
} & ParamListBase;

// Define the type for the route parameters
type ConditionsScreenRouteProp = RouteProp<RootStackParamList, "EmergencyPrinciples">;

// Define the type for the navigation object
type ConditionsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EmergencyPrinciples"
>;

type Props = {
  route: ConditionsScreenRouteProp;
  navigation: ConditionsScreenNavigationProp;
};

type StringValue = string | string[] | { [key: string]: StringValue };

export default function EmergencyPrinciples({ route, navigation }: Props) {
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
  const [generalPrinciple, setGeneralPrinciple] = useState<GeneralPrinciple>();

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
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
    setGeneralPrinciple(params.generalPrinciple);
  }, [params]); // Include params in the dependency array

  useEffect(() => {
    if (generalPrinciple?.overview && typeof generalPrinciple.overview === "object") {
      setOverviewHeaders(Object.keys(generalPrinciple.overview));
      setOverviewValues(Object.values(generalPrinciple.overview) as StringValue[]);
    }

    if (generalPrinciple?.content && typeof generalPrinciple.content === "object") {
      setContentHeaders(Object.keys(generalPrinciple.content));
      setContentValues(Object.values(generalPrinciple.content) as StringValue[]);
    }
  }, [generalPrinciple]);

  if (!isFontsLoaded) {
    return null;
  }

  if (generalPrinciple?.bullet === false) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topRightContainer}>
          <Bookmark item={generalPrinciple} />
        </View>
        <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Image style={styles.image} source={require("../assets/ic_caretleft.png")} />
          </TouchableOpacity>
          <View style={styles.margin}>
            <Text style={styles.subtitle}>General Principle</Text>
            {generalPrinciple && <Text style={styles.title}>{generalPrinciple.title}</Text>}
          </View>

          <View style={styles.margin}>
            {generalPrinciple && <Text style={styles.subtitle2}>{generalPrinciple.subtitle}</Text>}
          </View>
  
          <View style={styles.information}>
            <View style={isOverviewPressed ? styles.overview : styles.overviewHidden}>
              {generalPrinciple?.overview && typeof generalPrinciple.overview === "string" && (
                <View style={styles.infoSection}>
                  <Text style={styles.descriptionInfo}>{generalPrinciple?.overview}</Text>
                </View>
              )}
  
              {generalPrinciple?.overview && typeof generalPrinciple.overview === "object" && (
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
  
              {generalPrinciple?.content && typeof generalPrinciple.content === "string" && (
                <View style={styles.infoSection}>
                  <Text style={styles.descriptionInfo}>{generalPrinciple?.content}</Text>
                </View>
              )}
  
              {generalPrinciple?.content && typeof generalPrinciple.content === "object" && (
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
  else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topRightContainer}>
          <Bookmark item={generalPrinciple} />
        </View>
        <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image style={styles.image} source={require("../assets/ic_caretleft.png")} />
          </TouchableOpacity>
          <View style={styles.margin}>
            <Text style={styles.subtitle}>General Principle</Text>
            {generalPrinciple && <Text style={styles.title}>{generalPrinciple.title}</Text>}
          </View>
          <View style={styles.margin}>
            {generalPrinciple && <Text style={styles.subtitle2}>{generalPrinciple.subtitle}</Text>}
          </View>

          
          <View style={styles.information}>
            <View style={isOverviewPressed ? styles.overview : styles.overviewHidden}>
                {generalPrinciple?.overview && typeof generalPrinciple.overview === "string" && (
                  <View style={styles.infoSection}>
                    <Text style={styles.descriptionInfo}>{generalPrinciple?.overview}</Text>
                  </View>
                )}
    
                {generalPrinciple?.overview && typeof generalPrinciple.overview === "object" && (
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
          </View>          

        </ScrollView>
      </SafeAreaView>
    )
  }

  
}
