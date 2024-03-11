import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { RouteProp } from "@react-navigation/native"; // Import RouteProp
import { StackNavigationProp } from "@react-navigation/stack"; // Import StackNavigationProp
import { useFonts } from "expo-font";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import ArrayPage from "../components/ArrayPage";
import BulletPoint from "../components/BulletPoint";
import { Bookmark } from "../components/bookmark";

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

// type GeneralProps = {
//   route: {
//     params: {
//       titleProp: string;
//       overviewProp?: object;
//       contentProp: Content | Content[];
//     };
//   };
//   navigation: any;
// };

const GeneralPrinciples: React.FC<GeneralProps> = ({ route, navigation }) => {
  const { params } = route; // Destructure params from the route object
  //const { titleProp, contentProp } = route.params;

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  // const { title, content } = contentProp;

  if (Array.isArray(params.contentProp)) {
    return (
      <View style={styles.container}>
        <ArrayPage arrayProp={params.contentProp} title={params.titleProp} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.topRightContainer}>
          <Bookmark PageName="Emergency Page" />
        </View>
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
      </View>
    );
  }
};

export default GeneralPrinciples;
