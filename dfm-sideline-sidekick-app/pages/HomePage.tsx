/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Tooltip } from "@rneui/themed";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import React from "react";
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { getAllBookmarks } from "../components/bookmarkRoutes";
import { Carousel, CarouselItem } from "../components/carousel";
import { RootStackParamList } from "../components/viewAll";
import { useData } from "../functions/DataContext";
import { ArrowIcon } from "../icons/arrowIcon";
import { CiteIcon } from "../icons/citeIcon";

import styles from "./HomePageStyles";
import SearchPage from "./SearchPage";

export type Bookmark = {
  _id: string;
  subtitle: string;
  title: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>();
  const [searchShowing, setSearchShowing] = useState(false);
  const [tooltipShow, setTooltipShow] = useState(false);

  const { jsonData } = useData();
  const emergencies = jsonData?.emergencies ?? [];
  const categories = jsonData?.categories ?? [];

  const handleSearch = () => {
    navigation.navigate("Search" as never);
  };

  // loads the font
  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": Roboto_400Regular,
          "Roboto-Medium": Roboto_500Medium,
          "Roboto-Bold": Roboto_700Bold,
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
      // this section is due to inconsistencies in our database scheme
      carouselItems.push({
        _id: index.toString(),
        ...emergency,
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
            ...bookmark,
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
    { title: "General\nPrinciples", items: [...(jsonData?.generalPrinciples ?? [])] },
    ...categories
      .filter((category) => category.type === "Emergency")
      .map((category) => {
        const items = emergencies.filter((emergency) => category.items.includes(emergency.title));
        return {
          title: category.title,
          items,
        };
      }),
  ];

  const routes = ["", "", "", "", "", ""];

  return (
    <View style={styles.container}>
      <SearchPage title="Home" onPage={searchShowing} setShowing={setSearchShowing} />
      {!searchShowing && (
        <ScrollView
          alwaysBounceHorizontal={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.topMargin}
        >
          <View>
            <View style={styles.citationTitle}>
              <Text style={[styles.subtitle, styles.horizontalPadding, styles.topPadding]}>
                Browse By Category
              </Text>
              <View style={styles.citeIcon}>
                <Tooltip
                  visible={tooltipShow}
                  onOpen={() => {
                    setTooltipShow(true);
                  }}
                  onClose={() => {
                    setTooltipShow(false);
                  }}
                  popover={
                    <Text style={{ color: "#fff" }}>
                      For support and citations for the info found in this app, visit{" "}
                      <Text
                        style={{ color: "#0000EE", textDecorationLine: "underline" }}
                        onPress={() =>
                          void Linking.openURL("https://sideline-sidekick-app.web.app/citations")
                        }
                      >
                        this link
                      </Text>
                      .
                    </Text>
                  }
                  width={200}
                  height={100}
                >
                  <CiteIcon />
                </Tooltip>
              </View>
            </View>
            <View style={styles.categories}>
              {cards.map((card, index) => {
                const route = routes[index];
                return (
                  <Pressable
                    key={index}
                    style={styles.categoryButton}
                    onPress={() => {
                      navigation.navigate("ViewAll", {
                        arrayProp: card.items,
                        title: card.title,
                      });
                    }}
                  >
                    <Text style={styles.buttonText}>{card.title}</Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Emergency Carousel */}
            <View style={[styles.row, styles.horizontalPadding, styles.topPadding]}>
              <Text style={styles.subtitle}>Medical Emergencies</Text>
              {emergencies.length > 0 ? (
                <TouchableOpacity
                  style={styles.viewAllRow}
                  onPress={() => {
                    navigation.navigate("ViewAll", {
                      arrayProp: emergencies,
                      title: "Medical Emergencies",
                    });
                  }}
                >
                  {/* <TouchableOpacity style={styles.viewAllRow}> */}
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
                  <TouchableOpacity
                    style={styles.viewAllRow}
                    onPress={() => {
                      navigation.navigate("ViewAll", { arrayProp: bookmarks, title: "Bookmarks" });
                    }}
                  >
                    {/* <TouchableOpacity style={styles.viewAllRow}> */}
                    <Text style={styles.viewAll}>View all {bookmarks.length}</Text>
                    <ArrowIcon />
                  </TouchableOpacity>
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
          </View>
          <View style={styles.spacer} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomePage;
