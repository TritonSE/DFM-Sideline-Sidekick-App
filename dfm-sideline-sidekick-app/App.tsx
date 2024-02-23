/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/namespace */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { checkConnection } from "./download/connection/checkConnection";
import { downloadJSON } from "./download/downloadFromAPI";

export default function App() {
  const deviceType = Platform.OS;

  // makes it so that it only checks the version once per app launch
  let attempted = false;

  // check connection
  let connected = checkConnection();

  // checks on app open, connect change
  useEffect(() => {
    // stores if connected
    connected = checkConnection();
    console.log(attempted);

    // if also connected, attempt to redownload
    if (connected && !attempted) {
      downloadJSON("data.json", deviceType);
      attempted = true; // latches
    }
  }, [connected]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Button title="Download here!" onPress={() => {downloadJSON("data.json", deviceType)}} /> */}
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
