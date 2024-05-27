export type Category = {
  _id: string;
  title: string;
  items: [];
  type: string;
};

// Gets and returns all categories from API
export const getAllCategories = async () => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/categories`;

    const response = await fetch(url);
    const data = (await response.json()).categories as Category;

    // console.log(data);
    return data;
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
  } catch (error) {
    console.log("Error deleting page", error);
  }
};
