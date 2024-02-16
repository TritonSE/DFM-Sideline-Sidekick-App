import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { searchDocuments } from "../HandleSearch";

import styles from "./GlobalSearchStyles";

type Document = {
  id: string;
  title: string;
  subtitle: string;
};

const documents: Document[] = [
  {
    id: "1",
    title: "Cervical Spine Injury",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    id: "2",
    title: "Cervical Strain",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    id: "3",
    title: "Stroke",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const SearchBarComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);

  const handleSearch = (text: string) => {
    setQuery(text);
    const matchedDocuments = searchDocuments(documents, text);
    setFilteredDocuments(matchedDocuments);
  };

  const clearInput = () => {
    setQuery("");
    setFilteredDocuments([]);
  };

  const highlightText = (text: string, input: string): React.ReactNode[] => {
    // Escape special characters in the query for use in a regular expression
    const escapedQuery = input.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    // Build a regex to match the query as whole words
    const queryRegex = new RegExp(`(\\b${escapedQuery})`, "gi");

    // Split the title by the regular expression to get an array of parts
    const parts = text.split(queryRegex);

    return parts.map((part, index) => {
      // Check if the part of the title matches the query and is not just a whitespace
      const isMatch = queryRegex.test(part) && part.trim() !== "";
      return (
        <Text key={index} style={isMatch ? styles.highlightedText : undefined}>
          {part}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Search</Text>
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
      {filteredDocuments.length > 0 && (
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
      )}
    </View>
  );
};

export default SearchBarComponent;
