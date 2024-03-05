/* eslint-disable import/no-duplicates */
/* eslint-disable import/namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Carousel } from "../components/carousel";

import styles from "./HomePageStyles";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);

  const handleSearch = (text: string) => {
    setQuery(text);
  };

  const clearInput = () => {
    setQuery("");
  };

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
        });
        setIsFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    void loadFont();
  }, []);

  const CarouselComponent = () => {
    const carouselItems: CarouselItem[] = [
      {
        id: 1,
        title: "Cervial",
        description: "LDKFJSLDJKF",
      },
    ];

    return <Carousel items={carouselItems} />;
  };

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <Icon name="search" size={13} color="gray" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={query}
              onChangeText={handleSearch}
              selectionColor="#909090"
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={clearInput} style={{ padding: 10 }}>
                <Icon name="x" size={15} color="gray" />
              </TouchableOpacity>
            )}
          </View>
          <View>
            {query.length > 0 && (
              <TouchableOpacity onPress={clearInput} style={styles.cancelButton}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.title}>Browse By Category</Text>
        <View style={styles.categories}>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.buttonText}>General{"\n"}Principles</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.buttonText}>Medical Issues</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.buttonText}>Upper Extremity{"\n"}Injuries</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.buttonText}>Lower Extremity{"\n"}Injuries</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.buttonText}>Axial Injuries</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.buttonText}>Soft Tissues{"\n"}Injuries</Text>
          </Pressable>
        </View>
        <Text style={styles.title}>Medical Emergencies</Text>
        <CarouselComponent />
        <Text style={styles.title}>Commonly Viewed</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
