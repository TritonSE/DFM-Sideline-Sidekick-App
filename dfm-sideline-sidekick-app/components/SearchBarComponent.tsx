import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import styles from "./SearchBarStyles";

type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear: () => void;
  onCancel: () => void;
  isFocused: boolean;
  inputRef: React.RefObject<TextInput>;
};

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  onFocus,
  onBlur,
  onClear,
  onCancel,
  isFocused,
  inputRef,
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          onFocus={onFocus}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={isFocused}
          onBlur={onBlur}
          selectionColor="#909090"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={onClear} style={{ padding: 10 }}>
            <Icon name="x" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      {isFocused && (
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
