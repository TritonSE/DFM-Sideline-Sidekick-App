/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/namespace */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { downloadJSON } from "./download/downloadFromAPI";


export default function App() {

  const deviceType = Platform.OS;

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Download here!" onPress={() => {downloadJSON("test.json", deviceType)}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});