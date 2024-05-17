import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Font from "expo-font";
import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { NumbersSection } from "../components/NumbersSection";

import styles from "./MainPrinciplesStyles";

import type { GeneralPrinciple } from "../functions/DataContext";

export type RootStackParamList = {
  // Define the parameters for your screens here
  MainPrinciples: {
    title: string;
    principles: GeneralPrinciple[];
  }; // Example parameter
} & ParamListBase;

type Props = {
  route: RouteProp<RootStackParamList, "MainPrinciples">;
  navigation: StackNavigationProp<RootStackParamList, "MainPrinciples">;
};

export default function MainPrinciples({ route, navigation }: Props) {
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);
  const { title, principles } = route.params;

  React.useEffect(() => {
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

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image style={styles.image} source={require("../assets/ic_caretleft.png")} />
      </TouchableOpacity>
      <View style={styles.margin}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <View style={styles.resultList}>
          <FlatList
            data={principles}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            renderItem={({ index }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() => {
                  navigation.navigate("GeneralPrinciples", { contentProp: principles[index] });
                }}
              >
                <NumbersSection property1={index + 1}></NumbersSection>
                <View style={styles.listItemTextContainer}>
                  <Text style={styles.listItemTitle}>{principles[index].title}</Text>
                  <Text style={styles.listItemSubtitle}>{principles[index].subtitle}</Text>
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
