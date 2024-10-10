"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { Category, deletePage } from "../api/Categories";
import { deleteEmergency } from "../api/emergencies";
import { deleteGeneralPrinciple } from "../api/principles";
import PageContainer from "../components/PageContainer";
import ProtectedRoute from "../components/ProtectedRoute";
import Toast from "../components/Toast";

function CategoryInfo() {
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
      await deletePage(categoryId, title);
      if (category.type === "Emergency") {
        await deleteEmergency(title);
      } else {
        await deleteGeneralPrinciple(title);
      }
      setShowToast(true);
      const newItems = category.items.filter((item) => item !== title);
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
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-20 gap-8 bg-[#E5EFF5]">
      <div className="flex flex-row justify-between w-5/6">
        <h1 className="text-start text-2xl font-bold">{category ? category.title : ""}</h1>
      </div>

      <div className="flex flex-col h-max w-5/6 p-10 rounded-md bg-white">
        <div className="flex flex-row items-center justify-between mb-10">
          <h2 className="text-2xl">All Pages</h2>
          <div className="flex flex-row flex-wrap justify-end gap-2">
            <Link
              href={{
                pathname: category.type === "Emergency" ? "/add-emergency" : "/add-principle",
                query: { category: JSON.stringify(category) },
              }}
              className="px-4 py-2 rounded-md text-white bg-[#00629B]"
            >
              + Add Page
            </Link>
          </div>
        </div>
        <PageContainer items={[category]} onDeletePage={onDeletePage}></PageContainer>
        {showToast && (
          <Toast
            backgroundColor={"#000000"}
            message={"Page deleted"}
            onClose={() => {
              handleCloseToast();
            }}
            isError={false}
          />
        )}
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <ProtectedRoute>
      <Suspense>
        <CategoryInfo />
      </Suspense>
    </ProtectedRoute>
  );
}
