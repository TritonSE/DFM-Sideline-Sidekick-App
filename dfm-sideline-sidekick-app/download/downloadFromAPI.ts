/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as FileSystem from "expo-file-system";

import { checkDirectoryExists, checkFileExists } from "./File Preprocess/existenceChecker";
import { checkDevice } from "./checkDevice/checkDevice";
import { createResumable } from "./createResumable/createResumable";
import { getCurrentVersion } from "./versionControl/getCurrentVersion";
import { getStoredVersion, setStoredVersion } from "./versionControl/storedVersion";

export const downloadJSON = async (fileName: string, OS: string) => {
  let localhost;

  // check if currently running on an emulator or device
  const isDevice = checkDevice();

  if (isDevice) {
    localhost = process.env.EXPO_PUBLIC_IP_ADDRESS; // PUT YOUR IP ADDRESS OF YOUR LAPTOP HERE (for running on physical devices) [1. go to command line, 2. type ipconfig /all 3. it's under IPv4 address]
  } else {
    // compatibility for type of device
    localhost = OS === "android" ? "10.0.2.2" : "127.0.0.1";
  }

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
    let uri = "";

    const newestVersion = (await getCurrentVersion(versionUrl))[0].version as string;
    const storedVersion = await getStoredVersion();

    console.log(); // feel free to remove these extra logs, they're just for output clarity when debugging

    console.log("PRINT VERSIONS BEFORE UPDATE");
    console.log("UPDATED DEVICE VERSION:", storedVersion);
    console.log("NEWEST VERSION:", newestVersion);

    console.log();

    // no stored version or current doesn't match stored version
    if (!fileExists || !storedVersion || storedVersion !== newestVersion) {
      // find directory or creates it if not found
      await checkDirectoryExists(fileDir);

      // deletes file if it exists
      if (fileExists) {
        console.log("DELETING EXISTING FILE");
        await FileSystem.deleteAsync(fileDir + fileName);

        // Check if the file still exists
        const fileStillExists = await checkFileExists(fileDir, fileName);
        if (!fileStillExists) {
          console.log("FILE SUCCESSFULLY DELETED");
        } else {
          console.log("FILE DELETION FAILED");
        }
      }

      // downloads file from api and stores in result
      const result = await downloadResumable.downloadAsync();
      if (result) {
        uri = result.uri;
      }

      // update the stored version to the newest version
      if (newestVersion) {
        await setStoredVersion(newestVersion.toString());
      } else {
        console.log("NO VERSIONS CURRENTLY EXIST");
      }
    } else {
      console.log("FILE ALREADY EXISTS AND IS UP TO DATE");
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

    const updatedStoredVersion = await getStoredVersion();

    console.log("PRINT UPDATED VERSIONS (should be the same):");
    console.log("UPDATED DEVICE VERSION:", updatedStoredVersion);
    console.log("NEWEST VERSION:", newestVersion);

    console.log();

    // prints emergencies and general principles
    console.log("EMERGENCIES JSON:");
    console.log(jsonOutput.emergencies);

    console.log();

    console.log("GENERAL PRINCIPLES JSON:");
    console.log(jsonOutput.generalPrinciples);
  } catch (err) {
    console.log("ERROR:", err);
  }
};
