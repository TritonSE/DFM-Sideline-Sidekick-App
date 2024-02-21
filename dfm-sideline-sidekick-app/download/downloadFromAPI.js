/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as FileSystem from "expo-file-system";

import { checkDirectoryExists, checkFileExists } from "./File Preprocess/existenceChecker";
import { createResumable } from "./createResumable/createResumable";
import { getCurrentVersion } from "./versionControl/getCurrentVersion";
import { getStoredVersion, setStoredVersion } from "./versionControl/storedVersion";

export const downloadJSON = async (fileName, OS) => {
  // compatibility for type of device
  const localhost = OS === "android" ? "10.0.2.2" : "127.0.0.1";
  const url = `http://${localhost}:3001/api/allWithVersion`; // all data
  const versionUrl = `http://${localhost}:3001/api/version`; // newest version

  // directory in local storage to store files at
  const fileDir = FileSystem.documentDirectory + "expo/";

  // download resumable object to call functions on
  const downloadResumable = createResumable(url, fileDir, fileName);

  // checking if file exists, will be null if not
  const fileExists = await checkFileExists(fileDir, fileName);

  try {
    // will store the path to our file
    let uri;

    const newestVersion = (await getCurrentVersion(versionUrl))[0].version;
    const storedVersion = await getStoredVersion();

    console.log(storedVersion, newestVersion);

    // no stored version or current doesn't match stored version
    if (!fileExists || !storedVersion || storedVersion < newestVersion) {
      // find directory or creates it if not found
      await checkDirectoryExists(fileDir);

      // deletes file if it exists
      if (fileExists) {
        console.log("Deleting existing file");
        await FileSystem.deleteAsync(fileDir + fileName);

        // Check if the file still exists
        const fileStillExists = await checkFileExists(fileDir, fileName);
        if (!fileStillExists) {
          console.log("File successfully deleted");
        } else {
          console.log("File deletion failed");
        }
      }

      // downloads file from api and stores in result
      const result = await downloadResumable.downloadAsync();
      uri = result.uri;

      // update the stored version to the newest version
      await setStoredVersion(newestVersion.toString());
    } else {
      console.log("File already exists and is up to date");
      uri = fileDir + fileName;
    }

    // gets info about file
    const output = await FileSystem.getInfoAsync(uri);

    // reads in the file as a string
    const str = await FileSystem.readAsStringAsync(uri);

    // gets JSON version of string
    const jsonOutput = JSON.parse(str);

    console.log("OUTPUT", output);
    console.log("VERSION:", jsonOutput.version[0].version);

    const x = await getStoredVersion();

    console.log("PRINT UPDATED VERSIONS (should be the same):", x, newestVersion);

    // prints emergencies and general principles
    // console.log(jsonOutput.emergencies);
    // console.log(jsonOutput.generalPrinciples);
  } catch (err) {
    console.log("ERROR:", err);
  }
};
