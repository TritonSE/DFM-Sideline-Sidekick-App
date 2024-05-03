import * as FileSystem from "expo-file-system";

export const checkFileExists = async (fileDir: string, fileName: string) => {
  const filePath = await FileSystem.getInfoAsync(fileDir + fileName);

  // checks if file exists
  return filePath.exists;
};

export const checkDirectoryExists = async (fileDir: string) => {
  // checks if directory info
  const dir = await FileSystem.getInfoAsync(fileDir);

  // if it doesn't exist
  if (!dir.exists) {
    // make a new directory to store the files
    await FileSystem.makeDirectoryAsync(fileDir, { intermediates: true }); // intermediates make it so that it doesn't throw error when there is no directory
  }
};
