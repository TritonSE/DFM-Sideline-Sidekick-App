import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";

const asyncStorage: AsyncStorageStatic = AsyncStorage;

type Bookmark = {
  _id: string;
  subtitle: string;
  title: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

export const createBookmark = async (item: Bookmark) => {
  try {
    const bookmarksJSON: string | null = await asyncStorage.getItem("bookmarks");
    const bookmarks: Bookmark[] = bookmarksJSON ? (JSON.parse(bookmarksJSON) as Bookmark[]) : [];
    const exists = bookmarks.some((bookmark) => bookmark._id === item._id);
    if (exists) {
      throw new Error("Bookmark already exists!");
    }
    bookmarks.push(item);
    console.log(item);
    console.log(bookmarks);
    await asyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    console.log("Bookmark created:", item);
  } catch (error) {
    console.error("Error creating bookmark: ", error);
    throw new Error("Error creating bookmark: " + error);
  }
};

export const deleteBookmark = async (item: Bookmark) => {
  try {
    const bookmarksJSON: string | null = await asyncStorage.getItem("bookmarks");
    const existingBookmarks: Bookmark[] = bookmarksJSON
      ? (JSON.parse(bookmarksJSON) as Bookmark[])
      : [];
    const index = existingBookmarks.findIndex((bookmark) => bookmark.title === item.title);
    if (index !== -1) {
      existingBookmarks.splice(index, 1);
      await asyncStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
      console.log("Bookmark deleted!");
    } else {
      console.log("Bookmark not found!");
    }
  } catch (error) {
    console.error("Error deleting bookmark:", error);
  }
};

export const findBookmark = async (item: Bookmark) => {
  try {
    const bookmarksJSON: string | null = await asyncStorage.getItem("bookmarks");
    const existingBookmarks: Bookmark[] = bookmarksJSON
      ? (JSON.parse(bookmarksJSON) as Bookmark[])
      : [];
    const index = existingBookmarks.findIndex((bookmark) => bookmark.title === item.title);
    return index !== -1;
  } catch (error) {
    console.error("Error finding bookmark:", error);
  }
};

export const getAllBookmarks = async (): Promise<Bookmark[]> => {
  try {
    const bookmarksJSON: string | null = await asyncStorage.getItem("bookmarks");
    const existingBookmarks: Bookmark[] = bookmarksJSON
      ? (JSON.parse(bookmarksJSON) as Bookmark[])
      : [];
    return existingBookmarks;
  } catch (error) {
    console.error("Error getting bookmarks:", error);
    return [];
  }
};

export const clearBookmarks = async () => {
  try {
    await asyncStorage.removeItem("bookmarks");
    console.log("Bookmarks cleared successfully.");
  } catch (error) {
    console.error("Error clearing bookmarks:", error);
  }
};
