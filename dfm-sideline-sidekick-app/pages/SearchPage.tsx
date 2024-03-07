import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { useData } from "../DataContext";
import { searchDocuments } from "../HandleSearch";
import SearchBar from "../SearchBarComponent";

import { RootStackParamList } from "./ConditionsSection";
import styles from "./GlobalSearchStyles";

type DocumentBase = {
  _id: string;
  title: string;
  subtitle?: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

type ConditionsNavigationProp = StackNavigationProp<RootStackParamList, "Conditions">;

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentBase[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { jsonData } = useData();
  const emergencies = jsonData?.emergencies ?? [];
  const generalPrinciples = jsonData?.generalPrinciples ?? [];
  const navigation = useNavigation<ConditionsNavigationProp>();
  const inputRef = useRef<TextInput>(null);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text) {
      const allDocuments = [...emergencies, ...generalPrinciples];
      const matchedDocuments = searchDocuments(allDocuments, text).map((doc) => ({
        ...doc,
        _id: doc._id ?? "fallback-id",
        subtitle:
          doc.subtitle ??
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      }));
      setFilteredDocuments(matchedDocuments);
    } else {
      setFilteredDocuments([]);
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
    setIsFocused(false);
    if (inputRef.current !== null) {
      inputRef.current.blur();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Search</Text>
      <SearchBar
        query={query}
        setQuery={handleSearch}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onClear={clearInput}
        onCancel={cancelSearch}
        isFocused={isFocused}
        inputRef={inputRef}
      />
      <View>
        {query.length === 0 ? (
          isFocused ? (
            <Text>Recent Searches...</Text>
          ) : (
            <Text>Home Screen Cards...</Text>
          )
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
                    if (item.content !== undefined) {
                      navigation.navigate("GeneralPrinciples", { contentProp: item });
                      console.log(item.content);
                    } else {
                      navigation.navigate("MedicalConditions", { emergency: item });
                    }
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
    </View>
  );
};
export default SearchPage;
