import * as FileSystem from 'expo-file-system';
import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export default function App() {

  // "https://api.sampleapis.com/wines/reds"
  // storing api url
  const localhost = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";
  const url = `http://${localhost}:3001/api/all`;

  // directory in local storage to store files at
  const fileDir = FileSystem.documentDirectory + "expo/";
  const fileName = 'emergencies.json';

  // download resumable object to call functions on
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    fileDir + fileName,
    {}
  )

  const checkFileExists = async () => {
    const filePath = await FileSystem.getInfoAsync(fileDir + fileName);

    // checks if file exists
    return filePath.exists;
  }

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
    try {

      // check if file exists already
      const fileExists = await checkFileExists();

      let uri;

      if (!fileExists) {

        // find directory or creates it if not found
        await checkDirectoryExists();

        // downloads file from api and stores in result
        const result = await downloadResumable.downloadAsync();
        uri = result.uri;

      } else {
        console.log("File already exists");

        uri = fileDir + fileName;
      }

      const output = await FileSystem.getInfoAsync(uri);
      const str = await FileSystem.readAsStringAsync(uri);

      const jsonOutput = JSON.parse(str);

      console.log(output);
      console.log(jsonOutput);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Download here!" onPress={downloadJSON}/>
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