import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Font from "expo-font";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { useData } from "../DataContext";
import { searchDocuments } from "../HandleSearch";
import SearchBar from "../SearchBarComponent";

import { RootStackParamList } from "./ConditionsSection";
import styles from "./SearchPageStyles";

type DocumentBase = {
  _id: string;
  title: string;
  subtitle?: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

type SearchPageProps = {
  onPage: boolean;
  setShowing?: (param: boolean) => void;
  title: string;
};

type ConditionsNavigationProp = StackNavigationProp<RootStackParamList, "Conditions">;

const SearchPage: React.FC<SearchPageProps> = ({
  onPage = true,
  setShowing,
  title = "Global Search",
}) => {
  const [query, setQuery] = useState<string>("");
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentBase[]>([]);
  const [recentSearches, setRecentSearches] = useState<DocumentBase[]>([]);
  const { jsonData } = useData();
  const emergencies = jsonData?.emergencies ?? [];
  const generalPrinciples = jsonData?.generalPrinciples ?? [];
  const navigation = useNavigation<ConditionsNavigationProp>();
  const inputRef = useRef<TextInput>(null);
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);

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

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text) {
      const allDocuments = [...emergencies, ...generalPrinciples];
      const matchedDocuments = searchDocuments(allDocuments, text).map((doc) => ({
        ...doc,
        _id: doc._id ?? "fallback-id",
        subtitle:
          doc.subtitle ?? "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.",
      }));
      setFilteredDocuments(matchedDocuments);
    } else {
      setFilteredDocuments([]);
    }
  };

  const addToRecentSearches = (document: DocumentBase) => {
    setRecentSearches((currentSearches) => {
      const exists = currentSearches.find((item) => item._id === document._id);
      if (exists) {
        return currentSearches;
      }
      const newSearches = [document, ...currentSearches];
      return newSearches.slice(0, 10); // limitting to most recent 10 searches
    });
  };

  const handlePress = (item: DocumentBase) => {
    addToRecentSearches(item);
    if (item.content !== undefined) {
      navigation.navigate("GeneralPrinciples", { contentProp: item });
    } else {
      navigation.navigate("MedicalConditions", { emergency: item });
    }
  };

  const highlightText = (text: string, input: string): React.ReactNode[] => {
    const words = input.split(/\s+/).map((word) => word.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&"));
    const pattern = words.join("|");
    const queryRegex = new RegExp(`(${pattern})`, "gi");
    const parts = text.split(queryRegex);

    return parts.map((part, index) => {
      const isMatch = queryRegex.test(part) && part.trim() !== "";
      queryRegex.lastIndex = 0;

      return (
        <Text key={index.toString()} style={isMatch ? styles.highlightedText : undefined}>
          {part}
        </Text>
      );
    });
  };

  const clearInput = () => {
    const newQuery = "";
    setQuery(newQuery);
    handleSearch(newQuery);
    setFilteredDocuments([]);
  };

  const cancelSearch = () => {
    setQuery("");
    setFilteredDocuments([]);
    if (inputRef.current !== null) {
      inputRef.current.blur();
    }
    if (setShowing !== undefined) {
      setShowing(false);
      return;
    }
    navigation.goBack();
  };
  if (!isFontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SearchBar
        query={query}
        setQuery={handleSearch}
        onClear={clearInput}
        onCancel={cancelSearch}
        inputRef={inputRef}
        isFocused={onPage}
        onFocus={() => {
          if (setShowing !== undefined) {
            setShowing(true);
          }
        }}
      />
      {onPage && (
        <View>
          {query.length === 0 ? (
            <>
              <Text style={styles.subtitle}>Recent</Text>
              <FlatList
                data={recentSearches}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItemContainer}
                    onPress={() => {
                      handlePress(item);
                    }}
                  >
                    <View style={styles.listItemTextContainer}>
                      <Text style={styles.recentItemTitle}>{item.title}</Text>
                      <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                    </View>
                    <Icon name="chevron-right" size={20} color="#909090" />
                  </TouchableOpacity>
                )}
              />
            </>
          ) : (
            <View style={styles.resultList}>
              <FlatList
                data={filteredDocuments}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItemContainer}
                    onPress={() => {
                      handlePress(item);
                    }}
                  >
                    <View style={styles.listItemTextContainer}>
                      <Text style={styles.listItemTitle}>{highlightText(item.title, query)}</Text>
                      <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                    </View>
                    <Icon name="chevron-right" size={20} color="#909090" />
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default SearchPage;
