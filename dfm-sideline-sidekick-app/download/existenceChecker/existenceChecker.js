/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as FileSystem from 'expo-file-system';

export const checkFileExists = async (fileDir, fileName) => {
    const filePath = await FileSystem.getInfoAsync(fileDir + fileName);

    // checks if file exists
    return filePath.exists;
}

export const checkDirectoryExists = async (fileDir) => {
    // checks if directory info
    const dir = await FileSystem.getInfoAsync(fileDir);

    console.log("Directory path:", fileDir);

    // if it doesn't exist
    if (!dir.exists) {
      console.log("Creating directory");

      // make a new directory to store the files
      await FileSystem.makeDirectoryAsync(fileDir, { intermediates: true }); // intermediates make it so that it doesn't throw error when no directory
    }
}