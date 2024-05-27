"use client";

import React, { useState } from "react";
import { Category } from "./categoryRoutes";
import TrashIcon from "../icons/trash.svg";
import EditIcon from "../icons/edit.svg";
import DeleteConfirmationPopup from "./DeletePopup";

type PageItemProps = {
  id: string;
  title: string;
  page: string;
  visibility?: boolean;
  onDeleteCategory: (categoryId: string) => void;
};

const PageItem: React.FC<PageItemProps> = ({ id, page, title, onDeleteCategory }) => {
  const [selectedValue, setSelectedValue] = useState("public");
  const [allowEdits, setAllowEdits] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = () => {
    setPopupVisible(true);
  };

  const handleConfirmDelete = async () => {
    try {
      onDeleteCategory(id);
      console.log("Category deleted:", id);
      setPopupVisible(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCancelDelete = () => {
    setPopupVisible(false);
  };

  return (
    <tr key={id} className="border-b">
      <td className="w-1/4 text-center py-3">{page}</td>
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
      <td className="w-1/4 text-center py-3">{title}</td>
      <td className="w-1/4 text-center py-3">
        <button
          className="mr-3 bg-[#E5EFF5] p-2 rounded-full border border-black"
          onClick={() => {
            setAllowEdits(!allowEdits);
          }}
        >
          <img src={EditIcon.src} alt="Edit" className="w-4 h-4" />
        </button>
        <button className="bg-[#E5EFF5] p-2 rounded-full border border-black">
          <img
            src={TrashIcon.src}
            alt="Delete"
            className="w-4 h-4"
            onClick={() => {
              handleDelete();
            }}
          />
        </button>
        {popupVisible ? (
          <DeleteConfirmationPopup onDelete={handleConfirmDelete} onCancel={handleCancelDelete} />
        ) : null}
      </td>
    </tr>
  );
};

export const PageContainer: React.FC<{
  items: Category[];
  onDeleteCategory: (categoryId: string) => void;
}> = ({ items: categories, onDeleteCategory }) => {
  return (
    <table>
      <tbody>
        <tr className="border-b">
          <th className="w-1/4 text-center py-3">Page Name</th>
          <th className="w-1/4 text-center py-3">Visibility</th>
          <th className="w-1/4 text-center py-3">Category</th>
          <th className="w-1/4 text-center py-3">Actions</th>
        </tr>

        {
          // go through each category's items
          categories.map((category: Category) => {
            return category.items.map((page, j) => (
              <PageItem
                key={`${String(j)}-${String(j)}`}
                id={category._id}
                page={page}
                title={category.title}
                onDeleteCategory={onDeleteCategory}
              />
            ));
          })
        }
      </tbody>
    </table>
  );
};

export default PageContainer;
