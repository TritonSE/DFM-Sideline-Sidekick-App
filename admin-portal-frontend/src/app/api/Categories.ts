import { updateVersion } from "./Version";

export type Category = {
  _id: string;
  title: string;
  items: string[];
  type: string;
};

type GetCategoriesResponse = {
  categories: Category[];
};

// Gets and returns all categories from API
export const getAllCategories = async () => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/categories`;

    const response = await fetch(url);
    const data = (await response.json()) as GetCategoriesResponse;

    return data.categories;
  } catch (error) {
    console.log("Error getting categories", error);
    return [];
  }
};

// Deletes a specific category
export const deleteCategory = async (itemId: string) => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/categories/${itemId}`;

    if (!url) {
      throw new Error("API URL is not defined");
    }

    await fetch(url, {
      method: "DELETE",
    });

    await updateVersion();
  } catch (error) {
    console.log("Error delete category", error);
  }
};

// Deletes a specific page (title) from a category
export const deletePage = async (itemId: string, title: string) => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/categories/${itemId}/${title}`;

    if (!url) {
      throw new Error("API URL is not defined");
    }

    await fetch(url, {
      method: "PUT",
    });

    await updateVersion();
  } catch (error) {
    console.log("Error deleting page", error);
  }
};

// Add a page (title) to a category
export const addPage = async (itemId: string, title: string) => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/categories/${itemId}`;

    if (!url) {
      throw new Error("API URL is not defined");
    }

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    await updateVersion();
  } catch (error) {
    console.log("Error deleting page", error);
  }
};

export const addCategory = async (title: string, type: string) => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/categories`;

    if (!url) {
      throw new Error("API URL is not defined");
    }

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, items: [], type }),
    });

    await updateVersion();
  } catch (error) {
    console.log("Error deleting page", error);
  }
};
