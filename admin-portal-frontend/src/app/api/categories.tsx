export interface CategoriesData {
    title: string;
    items: [],
    type: String
  }
  
  const port = process.env.DEV_PORT || 3001;
  const CATEGORIES_URL = `http://localhost:${port}/api/categories`;
  
  export const getAllCategories = async () => {
    try {
      const response = await fetch(CATEGORIES_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let data = await response.json();
      data = data.categories;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error)
      return [];
    }
  };
