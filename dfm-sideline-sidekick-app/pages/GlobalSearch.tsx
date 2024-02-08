import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

import styles from "./GlobalSearchStyles";

type Document = {
  id: string;
  title: string;
  subtitle: string;
};

const documents: Document[] = [
  { id: "1", title: "Cervical Spine Injury", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
  { id: "2", title: "Cervical Strain", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
  { id: "3", title: "Stroke", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
];

const SearchBarComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.trim()) {
      setFilteredDocuments([]);
    } else {
      const matchedDocuments = documents.filter((doc) =>
        doc.title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredDocuments(matchedDocuments);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Search</Text>
      <View style={styles.searchSection}>
        <Icon name="search" size={15} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={query}
          onChangeText={handleSearch}
          selectionColor="#909090"
        />
      </View>
      <FlatList
        data={filteredDocuments}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
            </View>
            <Icon name="chevron-right" size={12} color="#909090" />
          </View>
        )}
      />
    </View>
  );
};

export default SearchBarComponent;
