import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

type Document = {
  id: string;
  title: string;
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 17.5,
      paddingTop: 50,
    },
    title: {
      color: "#182B49",
      fontSize: 28,
      fontFamily: "Roboto",
      fontWeight: "700",
      marginBottom: 20,
      textAlign: "left",
      paddingTop: 10,
    },
    searchSection: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderRadius: 10,
      margin: 0,
    },
    searchIcon: {
      padding: 10,
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      color: "#424242",
    },
    itemTitle: {
      padding: 10,
    },
  });

const documents: Document[] = [
  { id: "1", title: "Emergency Action Plan" },
  { id: "2", title: "First Aid Procedures" },
  { id: "3", title: "Fire Safety Manual" },
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
        />
      </View>
      <FlatList
        data={filteredDocuments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.itemTitle}>{item.title}</Text>}
      />
    </View>
  );
};

export default SearchBarComponent;
