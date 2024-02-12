/* eslint-disable @typescript-eslint/no-unsafe-argument */
import AsyncStorage from '@react-native-async-storage/async-storage';

// gets the stored version if it exists,
export const getStoredVersion = async () => {
    try {
        const result = await AsyncStorage.getItem('version');
        return result
    } catch (e) {
        console.log("Get version failed:", e);
    }
}

export const setStoredVersion = async (value) => {
    console.log("value", value);

    try {
        await AsyncStorage.setItem('version', value);
    } catch (e) {
        console.log("Set version failed:", e)
    }
}