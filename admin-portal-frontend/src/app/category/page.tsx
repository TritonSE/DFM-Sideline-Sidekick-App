"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { Category, deletePage } from "../api/Categories";
import PageContainer from "../components/PageContainer";
import Toast from "../components/Toast";

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const categoryString = searchParams.get("category");
  const [category, setCategory] = useState(
    JSON.parse(categoryString ? categoryString : "") as Category,
  );
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (categoryString) {
      // Update the state when the query changes
      setCategory(JSON.parse(categoryString ? categoryString : "") as Category);
    }
  }, [categoryString]);

  const onDeletePage = async (categoryId: string, title: string) => {
    try {
      console.log("Deleting page:", title);
      await deletePage(categoryId, title);
      setShowToast(true);
      const newItems = category.items.filter((item) => item !== title);
      console.log(category);
      setCategory((prevCategory) => {
        return { ...prevCategory, items: newItems };
      });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-20 gap-8 bg-[#E5EFF5]">
        <div className="flex flex-row justify-between w-5/6">
          <h1 className="text-start text-2xl font-bold">{category ? category.title : "ooga"}</h1>
        </div>

        <div className="flex flex-col h-max w-5/6 p-10 rounded-md bg-white">
          <div className="flex flex-row items-center justify-between mb-10">
            <h2 className="text-2xl">All Pages</h2>
            <div className="flex flex-row flex-wrap justify-end gap-2">
              <button className="px-4 py-2 rounded-md text-white bg-[#00629B]">Edit Order</button>
              <button className="px-4 py-2 rounded-md text-white bg-[#00629B]">+ Add Page</button>
            </div>
          </div>
          <PageContainer items={[category]} onDeletePage={onDeletePage}></PageContainer>
          {showToast && (
            <Toast
              backgroundColor={"#000000"}
              message={"Page deleted"}
              onClose={handleCloseToast}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}
