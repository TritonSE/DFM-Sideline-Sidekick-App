/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { useData } from "../DataContext";
import { getAllBookmarks } from "../components/bookmarkRoutes";
import { Carousel, CarouselItem } from "../components/carousel";
import { ArrowIcon } from "../icons/arrowIcon";

import styles from "./HomePageStyles";

type Bookmark = {
  _id: string;
  subtitle: string;
  title: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

const HomePage = () => {
  const navigation = useNavigation();
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>();

  const { jsonData } = useData();
  const emergencies = jsonData?.emergencies ?? [];

  const handleSearch = () => {
    navigation.navigate("Search" as never);
  };

  // loads the font
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

  useEffect(() => {
    // checks for bookmarks updates when navigate to page
    const unsubscribe = navigation.addListener("focus", () => {
      async function getBookmarks() {
        try {
          setBookmarks(await getAllBookmarks());
        } catch (error) {
          console.log(error);
        }
      }
      // gets the bookmarks (if undefined means its loading)
      void getBookmarks();
    });

    return unsubscribe;
  }, [navigation, bookmarks]);

  const EmergenciesComponent = () => {
    const carouselItems: CarouselItem[] = [];

    emergencies.slice(0, 5).forEach((emergency, index) => {
      // this section is due to inconsistencies in our database schema
      let description = "";

      // has an object in overview
      if (emergency.overview instanceof Object) {
        if ("Placeholder" in emergency.overview) {
          description = emergency.overview.Placeholder as string;
        } else if ("Importance" in emergency.overview) {
          description = emergency.overview.Importance as string;
        }
      } else if (typeof emergency.overview === "string") {
        description = emergency.overview;
      }

      carouselItems.push({
        _id: index.toString(),
        ...emergency,
        subtitle: description,
      });
    });

    const color = "#E5EFF5";

    return <Carousel items={carouselItems} cardColor={color} />;
  };

  const BookmarksComponent = () => {
    const carouselItems: CarouselItem[] = [];

    // not loading
    if (bookmarks) {
      bookmarks
        .slice(0, 5)
        .reverse()
        .forEach((bookmark) => {
          carouselItems.push({
            _id: bookmark._id,
            title: bookmark.title,
            subtitle: bookmark.subtitle,
          });
        });
    }

    const color = "#FFFFFF";

    return <Carousel items={carouselItems} cardColor={color} />;
  };

  if (!isFontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const cards = [
    "General\nPrinciples",
    "Medical Issues",
    "Upper Extremity\nInjuries",
    "Lower Extremity\nInjuries",
    "Axial Injuries",
    "Soft Tissues\nInjuries",
  ];

  const routes = ["", "", "", "", "", ""];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={[styles.title, styles.horizontalPadding]}>Home</Text>
        <View style={[styles.searchContainer, styles.horizontalPadding, styles.topPadding]}>
          <View style={styles.searchSection}>
            <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
            <Pressable style={styles.input} onPress={handleSearch}>
              <Text style={styles.searchText}>Search</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.subtitle, styles.horizontalPadding, styles.topPadding]}>
          Browse By Category
        </Text>
        <View style={styles.categories}>
          {cards.map((card, index) => {
            const route = routes[index];
            return (
              <Pressable
                key={index}
                style={styles.categoryButton}
                onPress={() => {
                  if (route !== "") {
                    navigation.navigate(route as never);
                  }
                }}
              >
                <Text style={styles.buttonText}>{card}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Emergency Carousel */}
        <View style={[styles.row, styles.horizontalPadding, styles.topPadding]}>
          <Text style={styles.subtitle}>Medical Emergencies</Text>
          {emergencies.length > 0 ? (
            <TouchableOpacity style={styles.viewAllRow}>
              <Text style={styles.viewAll}>View all {emergencies.length}</Text>
              <ArrowIcon />
            </TouchableOpacity>
          ) : null}
        </View>
        <EmergenciesComponent />

        {/* Bookmarks Carousel */}
        <View style={[styles.row, styles.horizontalPadding]}>
          <Text style={styles.subtitle}>Bookmarks</Text>
          {bookmarks && bookmarks.length > 0 ? (
            <View style={styles.viewAllRow}>
              <Text style={styles.viewAll}>View all {bookmarks.length}</Text>
              <ArrowIcon />
            </View>
          ) : null}
        </View>
        {/* Conditional bookmark display */}
        {bookmarks ? (
          bookmarks.length === 0 ? (
            <Text style={{ textAlign: "center" }}>No bookmarks</Text>
          ) : (
            <BookmarksComponent />
          )
        ) : (
          <Text style={{ textAlign: "center" }}>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
