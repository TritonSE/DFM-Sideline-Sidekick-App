import * as FileSystem from "expo-file-system";
import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  // storing api url
  const url = "http://localhost:3001/api/all";

  // directory in local storage to store files at
  const fileDir = FileSystem.documentDirectory + "expo/";

  // download resumable object to call functions on
  const downloadResumable = FileSystem.createDownloadResumable(url, fileDir + "data.json", {});

  // Check if directory to place files exists already (creates a new directory if not)
  const checkDirectoryExists = async () => {
    // checks if directory info
    const dir = await FileSystem.getInfoAsync(fileDir);

    console.log("Directory path:", fileDir);
    console.log("Directory info:", dir);

    // if it doesn't exist
    if (!dir.exists) {
      console.log("Creating directory");

      // make a new directory to store the files
      await FileSystem.makeDirectoryAsync(fileDir, { intermediates: true }); // intermediates make it so that it doesn't throw error when no directory
    }
  };

  const downloadJSON = async () => {
    const filename = "data.json";
    const localhost = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";

    try {
      // Check if the file already exists
      const fileInfo = await FileSystem.getInfoAsync(fileDir + filename);

      if (fileInfo.exists) {
        console.log("File already exists.");
      } else {
        // Find directory or create it if not found
        await checkDirectoryExists();

        // Downloads file from API and stores it in result
        const result = await downloadResumable.downloadAsync();
        console.log("Result:", result);
      }
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Download here!" onPress={downloadJSON} />
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
