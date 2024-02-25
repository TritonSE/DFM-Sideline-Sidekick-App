/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

  // true when there's connection
  let connected = false;

  // checks on app open, connect change
  useEffect(() => {
    // stores if connected
    console.log("ATTEMPTED BEFORE:", attempted);

    async function matchConditions() {
      connected = await checkConnection();
      // if also connected, attempt to redownload
      if (connected && !attempted) {
        await downloadJSON("data.json", deviceType);

        attempted = true; // latches
      }
    }

    matchConditions();
  }, [connected]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
