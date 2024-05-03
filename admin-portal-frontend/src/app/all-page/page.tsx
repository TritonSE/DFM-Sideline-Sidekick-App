"use client";

import { useEffect, useState } from "react";
import { Category, getAllCategories } from "../components/categoryRoutes";
import PageContainer from "../components/PageContainer";

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
    <div className="flex flex-col items-center justify-center h-screen w-screen p-20 bg-blue-100">
      <div className="flex flex-col h-screen w-5/6 p-10 rounded-md bg-white">
        <div className="flex flex-row items-center justify-between mb-10">
          <h2 className="text-2xl">All Pages</h2>
          <div className="ml-24">
            <button className="px-4 py-2 rounded-md text-white bg-blue-600 mr-2">Edit Order</button>
            <button className="px-4 py-2 rounded-md text-white bg-blue-600">+ Add Page</button>
          </div>
        </div>
        <PageContainer items={categories}></PageContainer>
      </div>
    </div>
  );
}