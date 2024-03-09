import * as FileSystem from "expo-file-system";

export const createResumable = (url: string, fileDir: string, fileName: string) => {
  return FileSystem.createDownloadResumable(url, fileDir + fileName, {});
};
