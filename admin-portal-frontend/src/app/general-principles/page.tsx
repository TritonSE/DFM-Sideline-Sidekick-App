"use client";

import { useEffect, useState } from "react";

import { addCategory, deleteCategory, getAllCategories } from "../api/Categories";
import { CategoryContainer } from "../components/CategoryContainer";
import CategoryAddPopup from "../components/CategoryPopup";
import ProtectedRoute from "../components/ProtectedRoute";
import Toast from "../components/Toast";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [toastText, setToastText] = useState("");

  const handleAdd = () => {
    setPopupVisible(true);
  };

  const handleConfirmAdd = async (name: string) => {
    try {
      setPopupVisible(false);
      await addCategory(name, "General Principle");
      setToastText("Category added succesfully");
      setShowToast(true);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCancelAdd = () => {
    setPopupVisible(false);
  };

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
      await deleteCategory(categoryId);
      setToastText("Category deleted");
      setShowToast(true);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-4 md:p-20 bg-[#E5EFF5]">
        <div className="flex flex-row justify-between w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mb-6">
          <h1 className="text-start text-2xl font-bold">General Principles</h1>
        </div>
        <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 xl:w-9/12 p-4 md:p-10 rounded-md bg-white">
          <div className="flex flex-row items-center justify-between mb-6 md:mb-10">
            <h2 className="text-2xl">All Categories</h2>
            <div className="flex flex-row flex-wrap justify-end gap-2">
              <button
                className="px-4 py-2 rounded-md text-white bg-[#00629B]"
                onClick={() => {
                  handleAdd();
                }}
              >
                + Add Category
              </button>
            </div>
          </div>
          <CategoryContainer
            items={categories}
            type={"General Principle"}
            onDeleteCategory={onDeleteCategory}
          />
          {showToast && (
            <Toast
              backgroundColor={toastText === "Category deleted" ? "#000000" : "#3BB966"}
              message={toastText}
              onClose={handleCloseToast}
              isError={false}
            />
          )}
        </div>
        {popupVisible && (
          <CategoryAddPopup
            onAdd={(name: string) => {
              void handleConfirmAdd(name);
            }}
            onCancel={handleCancelAdd}
            type={"General Principles"}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
