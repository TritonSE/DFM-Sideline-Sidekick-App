"use client";

import { useEffect, useState } from "react";
import FilterIcon from "../icons/filter.svg";

import { Category, deletePage, getAllCategories } from "../components/categoryRoutes";
import PageContainer from "../components/PageContainer";
import Toast from "../components/Toast";

type IconProps = {
  "content-type": string;
  src: string;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [publishedState, setPublishedState] = useState(true);
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

  const onDeletePage = async (categoryId: string, title: string) => {
    try {
      console.log("Deleting category with ID:", categoryId);
      await deletePage(categoryId, title);
      setShowToast(true);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const selectedStyle = "text-[#00629B] border-[#00629B] border-solid";
  const unselectedStyle = "text-[#6C6C6C]";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-20 gap-8 bg-[#E5EFF5]">
      <div className="flex flex-row justify-between w-5/6">
        <h1 className="text-start text-2xl font-bold">Global Search</h1>
      </div>

      <div className="flex flex-row justify-start w-5/6 gap-3">
        <button
          className={
            "bg-white px-5 py-1 rounded-md border " +
            (publishedState ? selectedStyle : unselectedStyle)
          }
          onClick={() => {
            setPublishedState(true);
          }}
        >
          Published (0)
        </button>
        <button
          className={
            "bg-white px-5 py-1 rounded-md border " +
            (!publishedState ? selectedStyle : unselectedStyle)
          }
          onClick={() => {
            setPublishedState(false);
          }}
        >
          Draft (0)
        </button>
      </div>

      <div className="flex flex-col h-fit w-5/6 p-10 rounded-md bg-white">
        <h1 className="text-start text-2xl font-bold">Filter</h1>

        <div className="flex flex-row justify-between mt-5 flex-wrap gap-5">
          <div className="flex flex-row gap-5 flex-wrap">
            <input
              type="text"
              className="h-10 rounded-md border border-[#B4B4B4] border-solid p-5"
              placeholder="Page name"
            />
            <input
              type="text"
              className="h-10 rounded-md border border-[#B4B4B4] border-solid p-5"
              placeholder="Date (MM/DD/YY)"
            />
            <input
              type="text"
              className="h-10 rounded-md border border-[#B4B4B4] border-solid p-5"
              placeholder="Visibility"
            />
          </div>
          <button className="flex flex-row items-center gap-2 px-4 py-2 rounded-md text-white bg-[#00629B]">
            <img src={(FilterIcon as IconProps).src} alt="Filter" className="w-4 h-4" />
            <p>Filter</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col h-max w-5/6 p-10 rounded-md bg-white">
        <div className="flex flex-row items-center justify-between mb-10">
          <h2 className="text-2xl">All Pages</h2>
          <div className="flex flex-row flex-wrap justify-end gap-2">
            <button className="px-4 py-2 rounded-md text-white bg-[#00629B]">Edit Order</button>
            <button className="px-4 py-2 rounded-md text-white bg-[#00629B]">+ Add Page</button>
          </div>
        </div>
        <PageContainer items={categories} onDeletePage={onDeletePage}></PageContainer>
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
