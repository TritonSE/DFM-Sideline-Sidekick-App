"use client";

import { useEffect, useState } from "react";
import CategoryContainer from "../components/CategoryContainer";
import { Category, getAllCategories, deleteCategory } from "../components/categoryRoutes";
import Toast from "../components/Toast";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [showToast, setShowToast] = useState(false);

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
  }, [categories]);

  const onDeleteCategory = async (categoryId: string) => {
    try {
      console.log("Deleting category with ID:", categoryId);
      await deleteCategory(categoryId);
      setShowToast(true);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-20 bg-[#E5EFF5]">
      <div className="flex flex-row justify-between w-5/6 mb-6">
        <h1 className="text-start text-2xl font-bold">General Principles</h1>
        <div>
          <select className="px-3 py-1 bg-white">
            <option disabled selected hidden>
              Filter by
            </option>
            <option value="Alphabetical Order">Alphabetical Order</option>
            <option value="Date added (Earliest)">Date added (Earliest)</option>
            <option value="Date added (Latest)">Date added (Latest)</option>
            <option value="Visibility">Visibility</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col h-max w-5/6 p-10 rounded-md bg-white">
        <div className="flex flex-row items-center justify-between mb-10">
          <h2 className="text-2xl">All Categories</h2>
          <div className="flex flex-row flex-wrap ml-24 gap-2">
            <button className="px-4 py-2 rounded-md text-white bg-[#00629B] mr-2">
              Edit Order
            </button>
            <button className="px-4 py-2 rounded-md text-white bg-[#00629B]">+ Add Category</button>
          </div>
        </div>
        <CategoryContainer
          items={categories}
          type={"General Principle"}
          onDeleteCategory={onDeleteCategory}
        ></CategoryContainer>
        {showToast ? (
          <Toast
            backgroundColor={"#000000"}
            message={"Category deleted"}
            onClose={handleCloseToast}
          />
        ) : null}
      </div>
    </div>
  );
}
