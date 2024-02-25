import AsyncStorage from "@react-native-async-storage/async-storage";

// gets the stored version if it exists,
export const getStoredVersion = async () => {
  try {
    const result = await AsyncStorage.getItem("version");
    if (result) {
      return parseInt(result);
    } else {
      return result; // null value means no stored version yet (first download)
    }
  } catch (e) {
    console.log("GET VERSION FAILED:", e);
  }
};

export const setStoredVersion = async (version: string) => {
  console.log("STORED VERSION:", version);

  try {
    await AsyncStorage.setItem("version", version.toString());
  } catch (e) {
    console.log("SET VERSION FAILED:", e);
  }
};
