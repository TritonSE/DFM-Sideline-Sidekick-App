/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as FileSystem from 'expo-file-system';

export const createResumable = (url, fileDir, fileName) => {
    return FileSystem.createDownloadResumable(
        url,
        fileDir + fileName,
        {}
    )
}