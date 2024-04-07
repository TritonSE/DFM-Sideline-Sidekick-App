/* eslint-disable import/no-duplicates */
/* eslint-disable import/namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from "@react-navigation/native";
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

import { Carousel, CarouselItem } from "../components/carousel";
import { ArrowIcon } from "../icons/arrowIcon";

import styles from "./HomePageStyles";

const HomePage = () => {
  const navigation = useNavigation();
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);

  const handleSearch = () => {
    navigation.navigate("Search");
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

    return <Carousel items={carouselItems} cardColor={color} />;
  };

  const FaceEyeComponent = () => {
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

    return <Carousel items={carouselItems} cardColor={color} />;
  };

  const MouthElbowHipComponent = () => {
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

    return <Carousel items={carouselItems} cardColor={color} />;
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

    const color = "#FFFFFF";

    return <Carousel items={carouselItems} cardColor={color} />;
  };

  if (!isFontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={[styles.title, styles.horizontalPadding]}>Home</Text>
        <View style={[styles.searchContainer, styles.horizontalPadding]}>
          <View style={styles.searchSection}>
            <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
            <Pressable style={styles.input} onPress={handleSearch}>
              <Text style={styles.searchText}>Search</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.subtitle, styles.horizontalPadding]}>Browse By Category</Text>
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

        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Medical Emergencies</Text>
          <TouchableOpacity style={styles.viewAllRow}>
            <Text style={styles.viewAll}>View all 7</Text>
            <ArrowIcon />
          </TouchableOpacity>
        </View>
        <EmergenciesComponent />

        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Face and Eye Emergencies</Text>
          <View style={styles.viewAllRow}>
            <Text style={styles.viewAll}>View all 7</Text>
            <ArrowIcon />
          </View>
        </View>
        <FaceEyeComponent />

        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Mouth, Elbow, Hip Emergencies</Text>
          <View style={styles.viewAllRow}>
            <Text style={styles.viewAll}>View all 7</Text>
            <ArrowIcon />
          </View>
        </View>
        <MouthElbowHipComponent />

        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Bookmarks</Text>
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
