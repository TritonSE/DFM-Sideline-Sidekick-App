import React, { useEffect, useRef, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { useData } from "../DataContext";
import { searchDocuments } from "../HandleSearch";

import styles from "./GlobalSearchStyles";

type Document = {
  id: string;
  title: string;
  subtitle: string;
};

const SearchBarComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const { jsonData } = useData();
  const emergencies = jsonData?.emergencies || [];
  const generalPrinciples = jsonData?.generalPrinciples || [];

  const handleSearch = (text: string) => {
    setQuery(text);
    const allDocuments = [...emergencies, ...generalPrinciples];
    const matchedDocuments = searchDocuments(allDocuments, text).map((doc) => ({
      ...doc,
      id: doc._id,
      subtitle:
        doc.subtitle ??
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", //default subtitle
    }));
    setFilteredDocuments(matchedDocuments);
  };

  const clearInput = () => {
    setQuery("");
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

  const highlightText = (text: string, input: string): React.ReactNode[] => {
    // Split the input into individual words and escape special characters for regex
    const words = input.split(/\s+/).map((word) => word.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&"));

    // Create a regex pattern that matches any of the words
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

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Search</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
          <Icon name="search" size={13} color="gray" style={styles.searchIcon} />
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Search"
            value={query}
            onChangeText={handleSearch}
            selectionColor="#909090"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={clearInput} style={{ padding: 10 }}>
              <Icon name="x" size={15} color="gray" />
            </TouchableOpacity>
          )}
        </View>
        <View>
          {isFocused && (
            <TouchableOpacity onPress={cancelSearch} style={styles.cancelButton}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View>
        {isFocused ? (
          query.length > 0 ? (
            <FlatList
              data={filteredDocuments}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
              renderItem={({ item }) => (
                <View style={styles.listItemContainer}>
                  <View style={styles.listItemTextContainer}>
                    <Text style={styles.listItemTitle}>{highlightText(item.title, query)}</Text>
                    <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Icon name="chevron-right" size={20} color="#909090" />
                </View>
              )}
            />
          ) : (
            <Text>Recent Searches...</Text>
          )
        ) : (
          <Text>Home Screen Cards...</Text>
        )}
      </View>
    </View>
  );
};

export default SearchBarComponent;
