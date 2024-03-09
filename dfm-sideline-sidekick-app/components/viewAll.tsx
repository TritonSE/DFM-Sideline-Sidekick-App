import React, { useState , useEffect } from "react";
import { Text, View, Platform, ScrollView, TouchableOpacity, Pressable } from "react-native";
import * as FileSystem from "expo-file-system";
import { downloadJSON } from "../download/downloadFromAPI";
import { RouteProp } from "@react-navigation/native"; // Import RouteProp
import { StackNavigationProp } from "@react-navigation/stack"; // Import StackNavigationProp
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./viewAllStyles";

const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

// type array = {
//   "How To Treat": {
//     Placeholder: string;
//   };
//   Overview: {
//     Placeholder: string;
//   };
//   __v: number;
//   _id: string;
//   title: string;
//   // You can add other properties based on the actual data structure
// };

// type array = {
//    "How To Treat": { Placeholder: string; }; Overview: { Placeholder: string; }; __v: number; _id: string; title: string; content?: undefined; overview?: undefined; treatment?: undefined;
// };


// type array = {
//   _id?: string; // Optional property since some objects lack it
//   __v?: number; // Optional property since some objects lack it
//   title: string;
//   overview?: string; // Optional property since some lack "overview"
//   treatment?: string; // Optional property since some lack "treatment"
//   content?: string; // Optional property for "New Emergency" object
//   // Define other optional properties for "Cervical Spine Injury" as needed
//   // (e.g., Diagnosis, Importance, Mechanism of Injury, Physical Exam)
//   HowToTreat?: { Placeholder: string }; // Optional property
//   Overview?: { Placeholder: string }; // Optional property
// };

type array = {
  _id: string;
  __v: number;
  title: string;
  content?: string;
  overview?: string | { [key: string]: any }; // Allow string or object for overview
  treatment?: string | { [key: string]: any }; // Allow string or object for treatment
  // Add other properties as needed
};

//({ "How To Treat": { Placeholder: string; }; Overview: { Placeholder: string; }; __v: number; _id: string; title: string; content?: undefined; overview?: undefined; treatment?: undefined; } | { __v: number; ... 6 more ...; Overview?: undefined; } | { ...; } | { ...; } | { ...; } | { ...; })[]



interface SpecificProps {
  arrayProp: array[];
  title: string;
}

export type RootStackParamList = {
  ViewAll: SpecificProps;
};

type Props = {
  route: RouteProp<RootStackParamList, "ViewAll">;
  navigation: StackNavigationProp<RootStackParamList, "ViewAll">;
};

// interface Props {
//   arrayProp: any;
//   title: any;
// }



// const Card = ({ title, description }) => {
//   return (
//     <View style={styles.containerCard}>
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>{title}</Text>
//         <Text style={styles.cardDescription}>{description}</Text>
//       </View>
//     </View>
//   );
// };

const Card = ({ title, description }) => {
  return (
    <Pressable>
      <View style={styles.containerCard}>
        <View style={styles.containerCard2}>
          <View style={styles.grayArea} />
          <View style={styles.textArea}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const ViewAll: React.FC<Props> = ({ navigation, route }) => {

  const { params } = route;

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backButtonContainer}
          >
            <Icon name="chevron-left" size={12} color="#000000" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>{params.title}</Text>
        </View>
        <Text style={styles.lenItems}>{params.arrayProp.length} items</Text>
        <ScrollView>
          {params.arrayProp.map((emergency) => (
          <Card
            key={emergency.title}
            title={emergency.title}
            description={placeholder} //change this to either be overview or content
          />
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default ViewAll;