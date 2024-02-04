import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import GlobalSearch from "./pages/GlobalSearch";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <GlobalSearch />
      <StatusBar style="auto" />
    </View>
  );
}
