import { useEffect, useState } from "react";
import CategoryContainer from "../components/CategoryContainer";
import { Category, getAllCategories } from "../components/categoryRoutes";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = (await getAllCategories()) as Category[];
        setCategories(fetchedCategories as never);
      } catch (error) {
        console.log("Fetch categories failed.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>General Principles</h1>
      <h2>All Categories</h2>
      <CategoryContainer items={categories} type={"Emergency"}></CategoryContainer>
    </div>
  );
}
