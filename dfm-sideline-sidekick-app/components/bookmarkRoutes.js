// import {AsyncStorage} from '@react-native-async-storage/async-storage';
// 
const AsyncStorage = require("@react-native-async-storage/async-storage").default;

export const createBookmark = async (item) => {
  try {
    let bookmarks = JSON.parse(await AsyncStorage.getItem("bookmarks")) || [];
    const exists = bookmarks.includes(item);
    if (exists) {
      throw new Error("Bookmark already exists!");
    }
    bookmarks.push(item);
    console.log(item);
    console.log(bookmarks);
    await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    console.log("Bookmark created:", item);
  } catch (error) {
    throw new Error("Error creating bookmark: " + error.message);
  }
};

export const deleteBookmark = async (item) => {
  try {
    const existingBookmarks = JSON.parse(await AsyncStorage.getItem("bookmarks")) || [];
    const index = existingBookmarks.findIndex((bookmark) => bookmark.title === item.title);
    if (index !== -1) {
      existingBookmarks.splice(index, 1);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
      console.log("Bookmark deleted!");
    } else {
      console.log("Bookmark not found!");
    }
  } catch (error) {
    console.error("Error deleting bookmark:", error);
  }
};

export const findBookmark = async (item) => {
  try {
    const existingBookmarks = JSON.parse(await AsyncStorage.getItem("bookmarks")) || [];
    const index = existingBookmarks.findIndex((bookmark) => bookmark.title === item.title);
    if (index !== -1) {
      return true;
    } else {
      return false; 
    }
  } catch (error) {
    console.error("Error finding bookmark:", error);
  }
}

export const getAllBookmarks = async () => {
  try {
    const existingBookmarks = JSON.parse(await AsyncStorage.getItem("bookmarks")) || [];
    return existingBookmarks;
  } catch (error) {
    console.error("Error getting bookmarks:", error);
    return [];
  }
};

// Function for testing to clear all bookmarks from AsyncStorage
export const clearBookmarks = async () => {
  try {
    await AsyncStorage.removeItem("bookmarks");
    console.log("Bookmarks cleared successfully.");
  } catch (error) {
    console.error("Error clearing bookmarks:", error);
  }
};
