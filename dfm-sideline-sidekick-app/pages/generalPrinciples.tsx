import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { RouteProp } from "@react-navigation/native"; // Import RouteProp
import { StackNavigationProp } from "@react-navigation/stack"; // Import StackNavigationProp
import { useFonts } from "expo-font";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import ArrayPage from "../components/ArrayPage";
import BulletPoint from "../components/BulletPoint";

import styles from "./generalPrinciplesStyles";

type ContentItem = Record<string, string>;

type Content = {
  title: string;
  content: ContentItem;
};

export type RootStackParamList = {
  GeneralPrinciples: { titleProp: string; overviewProp?: object; contentProp: Content | Content[] };
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

  if (Array.isArray(params.contentProp)) {
    return (
      <View style={styles.container}>
        <ArrayPage arrayProp={params.contentProp} title={params.titleProp} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntIcon name="close" style={styles.button} />
          </TouchableOpacity>
          <Text style={styles.title}>{params.titleProp}</Text>
          <Text style={styles.subTitle}>{params.contentProp.title}</Text>
          <BulletPoint content={params.contentProp.content} />
        </ScrollView>
      </View>
    );
  }
};

export default GeneralPrinciples;
