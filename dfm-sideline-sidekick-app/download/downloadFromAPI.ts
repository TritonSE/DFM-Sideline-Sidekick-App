/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as FileSystem from "expo-file-system";

import { checkDirectoryExists, checkFileExists } from "./File Preprocess/existenceChecker";
import { checkDevice } from "./checkDevice/checkDevice";
import { checkConnection } from "./connection/checkConnection";
import { createResumable } from "./createResumable/createResumable";
import { getCurrentVersion } from "./versionControl/getCurrentVersion";
import { getStoredVersion, setStoredVersion } from "./versionControl/storedVersion";

export const downloadJSON = async (fileName: string, OS: string, fetchNew: boolean) => {
  let localhost;

  // check if currently running on an emulator or device
  const isDevice = checkDevice();

  if (isDevice) {
    localhost = process.env.EXPO_PUBLIC_IP_ADDRESS; // PUT YOUR IP ADDRESS OF YOUR LAPTOP HERE (for running on physical devices) [1. go to command line, 2. type ipconfig /all 3. it's under IPv4 address]
  } else {
    // compatibility for type of device
    localhost = OS === "android" ? "http://10.0.2.2:3001" : "http://127.0.0.1:3001";
  }
  localhost = process.env.EXPO_PUBLIC_IP_ADDRESS;

  const url = `${localhost}/api/allWithVersion`; // all data
  const versionUrl = `${localhost}/api/version`; // newest version

  // directory in local storage to store files at
  const fileDir = FileSystem.documentDirectory + "expo/";

  // download resumable object to call functions on
  const downloadResumable = createResumable(url, fileDir, fileName);

  // checking if file exists, will be null if not
  const fileExists = await checkFileExists(fileDir, fileName);

  try {
    // will store the path to our file
    let uri = "";

    const storedVersion = await getStoredVersion();
    let newestVersion: string | number | null | undefined;
    if (fetchNew && (await checkConnection())) {
      try {
        newestVersion = (await getCurrentVersion(versionUrl))[0].version as string;
      } catch (error) {
        newestVersion = storedVersion;
      }
    } else {
      newestVersion = storedVersion;
    }

    // no stored version or current doesn't match stored version
    if (!fileExists || !storedVersion || storedVersion !== newestVersion) {
      // find directory or creates it if not found
      await checkDirectoryExists(fileDir);

      // deletes file if it exists
      if (fileExists) {
        await FileSystem.deleteAsync(fileDir + fileName);
      }

      // downloads file from api and stores in result
      const result = await downloadResumable.downloadAsync();
      if (result) {
        uri = result.uri;
      }

      // update the stored version to the newest version
      if (newestVersion) {
        await setStoredVersion(newestVersion.toString());
      }
    } else {
      uri = fileDir + fileName;
    }

    // reads in the file as a string
    const str = await FileSystem.readAsStringAsync(uri);

    // gets JSON version of string
    const jsonOutput = JSON.parse(str);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return jsonOutput;
  } catch (err) {
    console.log("ERROR:", err);
    return null;
  }
};
