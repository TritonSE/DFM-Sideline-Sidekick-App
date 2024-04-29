import { useNavigation } from "@react-navigation/native";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { NumbersSection } from "../components/NumbersSection";
import { Bookmark } from "../components/bookmark";

import styles from "./MainPrinciplesStyles";

// import { useRoute } from "@react-navigation/native";
import * as Font from "expo-font";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import BulletPoint from "../components/BulletPoint";

// import StringRenderer from "../components/StringRenderer";

import type { GeneralPrinciple } from "../generalPrinciples";

export type RootStackParamList = {
  // Define the parameters for your screens here
  Conditions: { generalPrinciple: GeneralPrinciple }; // Example parameter
} & ParamListBase;

// Define the type for the route parameters
type ConditionsScreenRouteProp = RouteProp<RootStackParamList, "MainPrinciples">;

// Define the type for the navigation object
type ConditionsScreenNavigationProp = StackNavigationProp<RootStackParamList, "MainPrinciples">;

type Props = {
  route: ConditionsScreenRouteProp;
  navigation: ConditionsScreenNavigationProp;
};

type StringValue = string | string[] | { [key: string]: StringValue };

export default function MainPrinciples({ route, navigation }: Props) {
  const [isOverviewPressed, setIsOverviewPressed] = useState<boolean>(true);
  const [isTreatmentPressed, setIsTreatmentPressed] = useState<boolean>(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);
  const [overviewHeaders, setOverviewHeaders] = useState<string[]>([]);
  const [overviewValues, setOverviewValues] = useState<StringValue[]>([]);
  //   const [overview, setOverview] = useState<StringValue[]>([]);
  // const [treatmentHeaders, setTreatmentHeaders] = useState<string[]>([]);
  // const [treatmentValues, setTreatmentValues] = useState<StringValue[]>([]);
  //   const [contentHeaders, setContentHeaders] = useState<string[]>([]);
  //   const [contentValues, setContentValues] = useState<StringValue[]>([]);

  const { params } = route; // Destructure params from the route object
  const [generalPrinciple, setGeneralPrinciple] = useState<GeneralPrinciple>();
  //   const navigation = useNavigation<ConditionsNavigationProp>();
  //   const inputRef = useRef<TextInput>(null);
  console.log(generalPrinciple);

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
  }, [generalPrinciple]);

  if (!isFontsLoaded) {
    return null;
  }

  const handlePress = (item) => {
    //navigation.navigate("EmergencyPrinciples", {
    //  generalPrinciple: generalPrinciple?.overview[item],
    //});
    //navigation.navigate("EmergencyPrinciples", { myItem });
    const myPrinciple: GeneralPrinciple = generalPrinciple?.overview[item];
    navigation.navigate("EmergencyPrinciples", {
      generalPrinciple: myPrinciple,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRightContainer}>
        <Bookmark item={generalPrinciple} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image style={styles.image} source={require("../assets/ic_caretleft.png")} />
      </TouchableOpacity>
      <View style={styles.margin}>
        {/* <Text style={styles.subtitle}>General Principle</Text> */}
        {generalPrinciple && <Text style={styles.title}>{generalPrinciple.title}</Text>}
      </View>
      <View>
        <View style={styles.resultList}>
          <FlatList
            data={overviewHeaders}
            //   keyExtractor={(item) => item._id}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() => {
                  handlePress(item);
                }}
              >
                <NumbersSection property1={index + 1}></NumbersSection>
                <View style={styles.listItemTextContainer}>
                  <Text style={styles.listItemTitle}>{item}</Text>
                  <Text style={styles.listItemSubtitle}>
                    {generalPrinciple?.overview[item].subheader}
                  </Text>
                </View>
                <Icon name="chevron-right" size={20} color="#909090" />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
