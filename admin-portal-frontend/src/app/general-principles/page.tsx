"use client";

import { useEffect, useState } from "react";

import { CategoryContainer } from "../components/CategoryContainer";
import Toast from "../components/Toast";
import { Category, deleteCategory, getAllCategories } from "../components/categoryRoutes";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories as never);
      } catch (error) {
        console.log("Fetch categories failed.");
      }
    };

    void fetchData();
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
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-4 md:p-20 bg-[#E5EFF5]">
      <div className="flex flex-row justify-between w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mb-6">
        <h1 className="text-start text-2xl font-bold">General Principles</h1>
        <div>
          <select defaultValue="Filter by" className="px-3 py-1 bg-white">
            <option value="Filter by" disabled hidden>
              Filter by
            </option>
            <option value="Alphabetical Order">Alphabetical Order</option>
            <option value="Date added (Earliest)">Date added (Earliest)</option>
            <option value="Date added (Latest)">Date added (Latest)</option>
            <option value="Visibility">Visibility</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 xl:w-9/12 p-4 md:p-10 rounded-md bg-white">
        <div className="flex flex-row items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl">All Categories</h2>
          <div className="flex flex-row flex-wrap justify-end gap-2">
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
        />
        {showToast && (
          <Toast
            backgroundColor={"#000000"}
            message={"Category deleted"}
            onClose={handleCloseToast}
          />
        )}
      </div>
    </div>
  );
}
