// import { useRoute } from "@react-navigation/native";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
// eslint-disable-next-line import/namespace
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import styles from "./ConditionSectionStyles";
import { getEmergency } from "./emergencies";

import type { Emergency } from "./emergencies";

export type RootStackParamList = {
  // Define the parameters for your screens here
  Conditions: { emergencyObjectId: string }; // Example parameter
} & ParamListBase;

// Define the type for the route parameters
type ConditionsScreenRouteProp = RouteProp<RootStackParamList, "Conditions">;

// Define the type for the navigation object
type ConditionsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Conditions">;

type Props = {
  route: ConditionsScreenRouteProp;
  navigation: ConditionsScreenNavigationProp;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ConditionsSection({ route, navigation }: Props) {
  const [isOverviewPressed, setIsOverviewPressed] = useState<boolean>(true);
  const [isTreatmentPressed, setIsTreatmentPressed] = useState<boolean>(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);


  // const route = useRoute();
  const { params } = route; // Destructure params from the route object
  //const { emergencyObjectId } = route.params();
  const [emergency, setEmergency] = useState<Emergency>();

  const mechanismArray: string[] = emergency?.overview?.["Mechanism of Injury"] ?? [];
  const diagnosisArray: string[] = emergency?.overview?.Diagnosis ?? [];
  const physicalArray: string[] = emergency?.overview?.["Physical Exam"] ?? [];

  const accuteArray: string[] = emergency?.treatment?.["Acute Management"] ?? [];
  const dispoArray: string[] = emergency?.treatment?.Dispo ?? [];
  const contentArray: string[] = emergency?.treatment?.Considerations.Content ?? [];


  

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
    if (params?.emergencyObjectId) {
      // Check if params and emergencyObjectId exist
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getEmergency(params.emergencyObjectId).then((result) => {
        if (result.success) {
          setEmergency(result.data);
        } else {
          console.error("Error fetching emergency data:", result.error);
        }
      });
    }
  }, [params]); // Include params in the dependency array

  type BulletListProps = {
    items: string[];
  };

  const BulletList = ({ items }: BulletListProps) => (
    <View style={styles.list}>
      {items.map((item: string, index: number) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );

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
          {/* <Text style={styles.title}>Cervical Spine Injury</Text> */}
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
            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Importance</Text>
              <Text style={styles.descriptionInfo}>
                {emergency?.overview?.Importance}
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Mechanism of Injury</Text>
              <BulletList items={mechanismArray}/> 
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Diagnosis</Text>
              <BulletList items={diagnosisArray} />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Physical Exam</Text>
                
              <BulletList items={physicalArray} />
            </View>
          </View>

          <View style={isTreatmentPressed ? styles.howToTreat : styles.howToTreatHidden}>
            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Acute Management</Text>
              <BulletList
                items={accuteArray}
              />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Dispo</Text>
              <BulletList items={dispoArray} />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Considerations</Text>
              <Text style={styles.descriptionInfo}>
                {emergency?.treatment.Considerations.Header}
              </Text>
              <BulletList
                items={contentArray}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
