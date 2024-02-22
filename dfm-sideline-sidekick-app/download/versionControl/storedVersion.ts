import AsyncStorage from "@react-native-async-storage/async-storage";

// gets the stored version if it exists,
export const getStoredVersion = async () => {
  try {
    const result = await AsyncStorage.getItem("version");
    if (result) {
      return parseInt(result);
    } else {
      return result; // null value
    }
  } catch (e) {
    console.log("Get version failed:", e);
  }
};

export const setStoredVersion = async (value: string) => {
  console.log("value", value);

  try {
    await AsyncStorage.setItem("version", value.toString());
  } catch (e) {
    console.log("Set version failed:", e);
  }
};
