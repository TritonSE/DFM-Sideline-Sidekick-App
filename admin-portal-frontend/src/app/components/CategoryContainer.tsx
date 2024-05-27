"use client";

import React, { useState } from "react";

import EditIcon from "../icons/edit.svg";
import TrashIcon from "../icons/trash.svg";

import DeleteConfirmationPopup from "./DeletePopup";

import { Category } from "./categoryRoutes";

type IconProps = {
  'content-type': string,
  src: string
}

type CategoryItemProps = {
  id: string;
  title: string;
  visibility?: boolean;
  pages: number;
  onDeleteCategory: (categoryId: string) => void;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ id, title, pages, onDeleteCategory }) => {
  const [selectedValue, setSelectedValue] = useState("public");
  const [allowEdits, setAllowEdits] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = () => {
    setPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    try {
      onDeleteCategory(id);
      setPopupVisible(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCancelDelete = () => {
    setPopupVisible(false);
  };

  return (
    <tr key={id + title} className="border-b">
      <td className="w-1/4 text-center py-3">{title}</td>
      <td className="w-1/4 text-center py-3">
        <select
          disabled={!allowEdits}
          className={`p-1 text-center rounded-md ${
            selectedValue === "public" ? "bg-[#E5EFF5]" : "bg-[#D9D9D9]"
          } ${allowEdits ? "appearance-auto" : "appearance-none"}`}
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        >
          <option value="public">Public</option>
          <option value="hidden">Hidden</option>
        </select>
      </td>
      <td className="w-1/4 text-center py-3">{pages}</td>
      <td className="w-1/4 text-center py-3">
        <button
          className="mr-3 bg-[#E5EFF5] p-2 rounded-full border border-black"
          onClick={() => {
            setAllowEdits(!allowEdits);
          }}
        >
          <img src={( EditIcon as IconProps ).src} alt="Edit" className="w-4 h-4" />
        </button>
        <button className="bg-[#E5EFF5] p-2 rounded-full border border-black">
          <img
            src={( TrashIcon as IconProps ).src}
            alt="Delete"
            className="w-4 h-4"
            onClick={() => {
              handleDelete();
            }}
          />
        </button>
      </td>
      {popupVisible ? (
        <DeleteConfirmationPopup onDelete={handleConfirmDelete} onCancel={handleCancelDelete} />
      ) : null}
    </tr>
  );
};

export const CategoryContainer: React.FC<{
  items: Category[];
  type: string;
  onDeleteCategory: (categoryId: string) => Promise<undefined>;
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
          // gets only either emergency or general principle
          .filter((category) => category.type === type)
          .map((category: Category) => {
            return (
              <CategoryItem
                key={category._id}
                id={category._id}
                title={category.title}
                pages={category.items.length}
                onDeleteCategory={onDeleteCategory}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default CategoryContainer;
