"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Category } from "../api/Categories";
import TrashIcon from "../icons/trash.svg";

import DeleteConfirmationPopup from "./DeletePopup";

type IconProps = {
  "content-type": string;
  src: string;
};

type CategoryItemProps = {
  id: string;
  category: Category;
  onDeleteCategory: (categoryId: string) => Promise<void>;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ id, category, onDeleteCategory }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = () => {
    setPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    try {
      void onDeleteCategory(id);
      setPopupVisible(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCancelDelete = () => {
    setPopupVisible(false);
  };

  return (
    <tr key={id + category.title} className="border-b">
      <td className="w-1/4 text-center py-3">
        <Link
          href={{
            pathname: "/category",
            query: { category: JSON.stringify(category) },
          }}
          className="underline"
        >
          {category.title}
        </Link>
      </td>
      <td className="w-1/4 text-center py-3">Public</td>
      <td className="w-1/4 text-center py-3">{category.items.length}</td>
      <td className="w-1/4 text-center py-3">
        <button className="bg-[#E5EFF5] p-2 rounded-full border border-black">
          <img
            src={(TrashIcon as IconProps).src}
            alt="Delete"
            className="w-4 h-4"
            onClick={() => {
              handleDelete();
            }}
          />
        </button>
      </td>
      {popupVisible ? (
        <DeleteConfirmationPopup
          onDelete={handleConfirmDelete}
          onCancel={handleCancelDelete}
          type={"category"}
        />
      ) : null}
    </tr>
  );
};

export const CategoryContainer: React.FC<{
  items: Category[];
  type: string;
  onDeleteCategory: (categoryId: string) => Promise<void>;
}> = ({ items: categories, type, onDeleteCategory }) => {
  return (
    <table>
      {/* table heading */}
      <tbody>
        <tr className="border-b">
          <th className="w-1/4 text-center py-3">Category Name</th>
          <th className="w-1/4 text-center py-3">Visibility</th>
          <th className="w-1/4 text-center py-3">Pages</th>
          <th className="w-1/4 text-center py-3">Actions</th>
        </tr>

        {categories
          .filter((category) => category.type === type)
          .map((category: Category) => {
            return (
              <CategoryItem
                key={category._id}
                id={category._id}
                category={category}
                onDeleteCategory={onDeleteCategory}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default CategoryContainer;
