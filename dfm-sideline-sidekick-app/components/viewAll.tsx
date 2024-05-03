import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ParamListBase, RouteProp } from "@react-navigation/native"; // Import RouteProp
import { StackNavigationProp } from "@react-navigation/stack"; // Import StackNavigationProp
import { useFonts } from "expo-font";
import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { GeneralPrinciple, MedicalEmergency } from "../functions/DataContext";
import { Bookmark } from "../pages/HomePage";

import styles from "./viewAllStyles";

export type RootStackParamList = {
  ViewAll: NavProps;
};

type NavProps = {
  arrayProp: Bookmark[] | MedicalEmergency[] | GeneralPrinciple[];
  title: string;
};

type CardProps = {
  emergency: GeneralPrinciple | MedicalEmergency | Bookmark;
  navigation: StackNavigationProp<ParamListBase>;
};

type ViewAllProps = {
  route: RouteProp<RootStackParamList, "ViewAll">;
  navigation: StackNavigationProp<ParamListBase>;
  arrayProp: Bookmark[] | MedicalEmergency[] | GeneralPrinciple[];
  title: string;
};

const Card = ({ emergency, navigation }: CardProps) => {
  return (
    <Pressable
      onPress={() => {
        //@ts-expect-error Because content prop not defined for emergencies
        if (emergency.content !== undefined) {
          navigation.navigate("GeneralPrinciples", {
            titleProp: emergency.title,
            contentProp: emergency,
          });
        } else {
          navigation.navigate("MedicalConditions", { emergency });
        }
      }}
    >
      <View style={styles.containerCard}>
        <View style={styles.containerCard2}>
          <View style={styles.grayArea} />
          <View style={styles.textArea}>
            <Text style={styles.textTitle}>{emergency.title}</Text>
            <Text style={styles.text}>{emergency.subtitle}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const ViewAll: React.FC<ViewAllProps> = ({ navigation, route }) => {
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
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButtonContainer}
        >
          <Icon name="chevron-left" size={12} color="#000000" style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.headerShadowContainer}>
          <View style={styles.headerShadow}>
            <Text style={styles.title}>{params.title}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.lenItems}>{params.arrayProp.length} items</Text>
        {params.arrayProp.map((emergency: GeneralPrinciple | MedicalEmergency | Bookmark) => (
          <Card key={emergency.title} emergency={emergency} navigation={navigation} />
        ))}
        <View style={styles.bottomPad} />
      </ScrollView>
    </View>
  );
};

export default ViewAll;
