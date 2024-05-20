import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { GeneralPrinciple, useData } from "../functions/DataContext";

import SearchPage from "./SearchPage";
import styles from "./generalPrinciplesMainStyles";

type ViewableCategory = {
  title: string;
  items: GeneralPrinciple[];
};

const GeneralPrinciplesMain = () => {
  const navigation = useNavigation();
  const { jsonData } = useData();
  const generalPrinciples = jsonData?.generalPrinciples ?? [];
  const categories = jsonData?.categories ?? [];

  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [searchShowing, setSearchShowing] = useState(false);

  React.useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    void loadFont();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const renderPressables = () => {
    const pressableData = [
      ...categories
        .filter((category) => category.type === "General Principle")
        .map((category) => {
          const items = generalPrinciples.filter((principle) =>
            category.items.includes(principle.title),
          );
          return {
            title: category.title,
            items,
          };
        }),
    ];

    const rows: ViewableCategory[][] = [];
    pressableData.map((item, idx) => {
      if (idx % 2 === 0) {
        // Start a new row every 2 items
        rows.push([item]);
      } else {
        rows[rows.length - 1].push(item);
      }
      return rows;
    }, []);

    return rows.map((row, colIndex) => (
      <View key={colIndex} style={styles.row}>
        {row.map((category: ViewableCategory, index) => (
          <Pressable
            key={`${index}-${colIndex}`}
            style={styles.pressable}
            onPress={() => {
              navigation.navigate("MainPrinciples", {
                title: category.title,
                principles: category.items,
              });
            }}
          >
            <Text style={styles.pressableText} numberOfLines={0}>
              {category.title}
            </Text>
          </Pressable>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.whiteBack}>
      <View style={styles.bottomMargin}>
        <SearchPage
          title="General Principles"
          onPage={searchShowing}
          setShowing={setSearchShowing}
        />
      </View>
      {!searchShowing && (
        <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.subheader}>
              <Text style={styles.subheaderText}>Browse by Category</Text>
            </View>
            <View style={styles.grid}>{renderPressables()}</View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default GeneralPrinciplesMain;
