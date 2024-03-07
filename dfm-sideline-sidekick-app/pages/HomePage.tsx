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
import { ArrowIcon } from "../icons/arrowIcon";

import styles from "./HomePageStyles";

const HomePage = (props) => {
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

  const EmergenciesComponent = () => {
    const carouselItems: CarouselItem[] = [
      {
        id: 1,
        title: "Cervical Spine Injury",
        description: "Direct blow to head/neck. Axial loading to spine, esp. w/ neck in flexion.",
      },
      {
        id: 2,
        title: "Cold Illnesses",
        description: "Moderate (86-89°F) or Severe (<86°F)",
      },
      {
        id: 3,
        title: "Cauda Equina Syndrome",
        description:
          "Pain radiating to the lower extremity, saddle anesthesia, urinary retention, bowelincontinence",
      },
      {
        id: 4,
        title: "Cauda Equina Syndrome",
        description:
          "Pain radiating to the lower extremity, saddle anesthesia, urinary retention, bowelincontinence",
      },
      {
        id: 5,
        title: "Cauda Equina Syndrome",
        description:
          "Pain radiating to the lower extremity, saddle anesthesia, urinary retention, bowelincontinence",
      },
      {
        id: 6,
        title: "Cauda Equina Syndrome",
        description:
          "Pain radiating to the lower extremity, saddle anesthesia, urinary retention, bowelincontinence",
      },
    ];

    const color = "#E5EFF5";

    return <Carousel items={carouselItems} cardColor={"#E5EFF5"} />;
  };

  const BookmarksComponent = () => {
    const carouselItems: CarouselItem[] = [
      {
        id: 1,
        title: "Cervical Spine Injury",
        description: "Direct blow to head/neck. Axial loading to spine, esp. w/ neck in flexion.",
      },
      {
        id: 2,
        title: "Cold Illnesses",
        description: "Moderate (86-89°F) or Severe (<86°F)",
      },
      {
        id: 3,
        title: "Cauda Equina Syndrome",
        description:
          "Pain radiating to the lower extremity, saddle anesthesia, urinary retention, bowelincontinence",
      },
      {
        id: 4,
        title: "Cauda Equina Syndrome",
        description:
          "Pain radiating to the lower extremity, saddle anesthesia, urinary retention, bowelincontinence",
      },
    ];

    const color = "#E5EFF5";

    return <Carousel items={carouselItems} cardColor={"#FFFFFF"} />;
  };

  if (!isFontsLoaded) {
    return null;
  }

  const navigateTo = (page) => {
    props.navigation.navigate(page);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={[styles.title, styles.horizontalPadding]}>Home</Text>
        <View style={[styles.searchContainer, styles.horizontalPadding]}>
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
        <Text style={[styles.subtitle, styles.horizontalPadding]}>Browse By Category</Text>
        <View style={styles.categories}>
          <Pressable
            style={styles.categoryButton}
            onPress={() => {
              navigateTo("GeneralPrinciples");
            }}
          >
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
        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Medical Emergencies</Text>
          <TouchableOpacity style={styles.viewAllRow}>
            <Text style={styles.viewAll}>View all 7</Text>
            <ArrowIcon />
          </TouchableOpacity>
        </View>
        <EmergenciesComponent />

        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Commonly Viewed</Text>
          <View style={styles.viewAllRow}>
            <Text style={styles.viewAll}>View all 7</Text>
            <ArrowIcon />
          </View>
        </View>
        <BookmarksComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
