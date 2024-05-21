export type Category = {
  _id: string;
  title: string;
  items: [];
  type: string;
};

// Gets and returns all categories from API
export const getAllCategories = async () => {
  try {
    const url = process.env.API_URL;

    if (!url) {
      throw new Error("API URL is not defined");
    }

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
    const url = process.env.API_URL + `/${itemId}`;

    if (!url) {
      throw new Error("API URL is not defined");
    }

    fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Error delete category", error);
  }
};
