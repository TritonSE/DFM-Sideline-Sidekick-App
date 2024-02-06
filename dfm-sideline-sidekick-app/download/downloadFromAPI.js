/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as FileSystem from 'expo-file-system';

import { createResumable } from './createResumable/createResumable';
import { checkDirectoryExists, checkFileExists } from './existenceChecker/existenceChecker';

export const downloadJSON = async (fileName, OS) => {

    // compatibility for type of device
    const localhost = OS === "android" ? "10.0.2.2" : "127.0.0.1";
    const url = `http://${localhost}:3001/api/all`;

    // directory in local storage to store files at
    const fileDir = FileSystem.documentDirectory + "expo/";

    // download resumable object to call functions on
    const downloadResumable = createResumable(url, fileDir, fileName);

    try {

        // check if file exists already
        const fileExists = await checkFileExists(fileDir, fileName);

        let uri;

        //   checks if file exists
        if (!fileExists) {

            // find directory or creates it if not found
            await checkDirectoryExists(fileDir);

            // downloads file from api and stores in result
            const result = await downloadResumable.downloadAsync();
            uri = result.uri;

        } else {
            console.log("File already exists");

            uri = fileDir + fileName;
        }

        // gets info about file
        const output = await FileSystem.getInfoAsync(uri);

        // reads in the file as a string
        const str = await FileSystem.readAsStringAsync(uri);

        // gets JSON version of string
        const jsonOutput = JSON.parse(str);

        console.log(output);
        console.log(jsonOutput.emergencies);
        console.log(jsonOutput.generalPrinciples);

    } catch (err) {
        console.log("ERROR:", err);
    }
}