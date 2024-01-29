import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import EmergencyCare from "./pages/EmergencyCare";
import GeneralPrinciples from "./pages/generalPrinciples";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <GeneralPrinciples />
      {/* <EmergencyCare/> */}
      <StatusBar style="auto" />
    </View>
  );
}
