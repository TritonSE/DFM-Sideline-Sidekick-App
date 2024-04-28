import { useEffect, useState } from "react";
import { Category, getAllCategories } from "../components/categoryRoutes";
import EmergencyContainer from "../components/EmergencyContainer";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = (await getAllCategories()) as Category[];
      console.log(fetchedCategories);

      setCategories(fetchedCategories as never);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Pages</h2>
      <EmergencyContainer items={categories}></EmergencyContainer>
    </div>
  );
}
