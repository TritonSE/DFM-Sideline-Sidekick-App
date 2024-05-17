import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { RouteProp } from "@react-navigation/native"; // Import RouteProp
import { StackNavigationProp } from "@react-navigation/stack"; // Import StackNavigationProp
import { useFonts } from "expo-font";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import BulletPoint from "../components/BulletPoint";
import { Bookmark } from "../components/bookmark";

import styles from "./generalPrinciplesStyles";

import type { GeneralPrinciple } from "../functions/DataContext";

export type RootStackParamList = {
  GeneralPrinciples: { contentProp: GeneralPrinciple };
};

type GeneralProps = {
  route: RouteProp<RootStackParamList, "GeneralPrinciples">;
  navigation: StackNavigationProp<RootStackParamList, "GeneralPrinciples">;
};

const GeneralPrinciples: React.FC<GeneralProps> = ({ route, navigation }) => {
  const { params } = route; // Destructure params from the route object

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topRightContainer}>
          <Bookmark item={params.contentProp} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image source={require("../assets/ic_caretleft.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>{params.contentProp.title}</Text>
        <BulletPoint content={params.contentProp.content} />
      </ScrollView>
    </View>
  );
};

export default GeneralPrinciples;
