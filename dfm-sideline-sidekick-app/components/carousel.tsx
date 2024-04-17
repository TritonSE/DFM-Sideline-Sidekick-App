import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { RootStackParamList } from "../pages/ConditionsSection";

import styles from "./carouselStyles";

export type CarouselItem = {
  _id: string;
  title: string;
  subtitle?: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

export type CarouselProps = {
  items: CarouselItem[];
  cardColor: string;
};

type ConditionsNavigationProp = StackNavigationProp<RootStackParamList, "Conditions">;

export const Carousel: React.FC<CarouselProps> = ({ items, cardColor }) => {
  const navigation = useNavigation<ConditionsNavigationProp>();
  const width = Dimensions.get("window").width;

  // conditional background formatting
  const cardStyle = StyleSheet.create({
    cardBack: {
      backgroundColor: cardColor,
    },
  });

  const handlePress = (item: CarouselItem) => {
    if (item.content !== undefined) {
      navigation.navigate("GeneralPrinciples", { contentProp: item });
    } else {
      navigation.navigate("MedicalConditions", { emergency: item });
    }
  };

  // renders items in carousel
  const renderItem = ({ item }: { item: CarouselItem }) => (
    <TouchableOpacity
      key={item._id}
      style={[styles.page, cardStyle.cardBack]}
      onPress={() => {
        handlePress(item);
      }}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription} numberOfLines={2}>
        {item.subtitle}
      </Text>
    </TouchableOpacity>
  );

  items.forEach((item) => {
    console.log(item);
    console.log(item.content);
  });

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="normal"
        showsHorizontalScrollIndicator={true}
        snapToInterval={Platform.OS === "ios" ? width / 3 : 0}
        // disableIntervalMomentum={Platform.OS === "ios" ? true : false}
        contentContainerStyle={styles.contentContainerStyle} // Add padding to the right to ensure the last item snaps correctly
      />
    </View>
  );
};
