import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export default function App() {

  // storing api url
  const url = "http://localhost:3001/api/all";

  // directory in local storage to store files at
  const fileDir = "storage/documents/" + 'expo/';

  // download resumable object to call functions on
  const downloadResumable = FileSystem.createDownloadResumable(
    "https://api.sampleapis.com/wines/reds",
    fileDir + 'data.json',
    {}
  )

  // Check if directory to place files exists already (creates a new directory if not)
  const checkDirectoryExists = async () => {

    // checks if directory info
    const dir = await FileSystem.getInfoAsync(fileDir);

    console.log(fileDir);
    

    // if it doesn't exist
    if (!dir.exists) {
      console.log('Creating directory');

      // make a new directory to store the files
      await FileSystem.makeDirectoryAsync(fileDir, { intermediates: true }) // intermediates make it so that it doesn't throw error when no directory
    }
  }

  const downloadJSON = async () => {
    const filename = 'data.json';
    const localhost = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";

    try {

      // find directory or creates it if not found
      await checkDirectoryExists();

      // downloads file from api and stores in result
      const result = await downloadResumable.downloadAsync();
      console.log(result);

      // save result to storage
      // await save(result.uri, filename, result.headers["Content-Type"]);

    } catch (err) {
      console.log(err);
    }
  }

  // const save = async (uri, filename, mimetype) => {
  //   // android needs to ask for storage permission
  //   if (Platform.OS === 'android') {
  //     const permission = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      
  //     if (permission.granted) {
  //       const base64 = await FileSystem.readAsStringAsync(uri, {encoding: FileSystem.EncodingType.base64});
  //       await FileSystem.StorageAccessFramework.createFileAsync(permission.directoryUri, filename, mimetype)
  //         .then(async (uri) => {
  //           await FileSystem.writeAsStringAsync(uri, base64, {encoding: FileSystem.EncodingType.base64});
  //         })
  //         .catch(e => console.log(e));
  //     } else {
  //       shareAsync(uri);
  //     }
  //   }
  // }

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
