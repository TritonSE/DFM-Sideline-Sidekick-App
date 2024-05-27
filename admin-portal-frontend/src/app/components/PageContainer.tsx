"use client";

import React, { useState } from "react";

import EditIcon from "../icons/edit.svg";
import TrashIcon from "../icons/trash.svg";

import DeleteConfirmationPopup from "./DeletePopup";

import { Category } from "./categoryRoutes";

type IconProps = {
  "content-type": string;
  src: string;
};

type PageItemProps = {
  id: string;
  categoryId: string;
  title: string;
  page: string;
  visibility?: boolean;
  onDeletePage: (categoryId: string, pageTitle: string) => void;
};

const PageItem: React.FC<PageItemProps> = ({ id, page, categoryId, title, onDeletePage }) => {
  const [selectedValue, setSelectedValue] = useState("public");
  const [allowEdits, setAllowEdits] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = () => {
    setPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    try {
      onDeletePage(categoryId, page);
      console.log("Page deleted:", page);
      setPopupVisible(false);
    } catch (error) {
      console.error("Error deleting page:", error);
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
          <img src={(EditIcon as IconProps).src} alt="Edit" className="w-4 h-4" />
        </button>
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
        {popupVisible ? (
          <DeleteConfirmationPopup onDelete={handleConfirmDelete} onCancel={handleCancelDelete} />
        ) : null}
      </td>
    </tr>
  );
};

export const PageContainer: React.FC<{
  items: Category[];
  onDeletePage: (categoryId: string, pageTitle: string) => void;
}> = ({ items: categories, onDeletePage }) => {
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
                id={`${String(j)}-${String(j)}`}
                categoryId={category._id}
                page={page}
                title={category.title}
                onDeletePage={onDeletePage}
              />
            ));
          })
        }
      </tbody>
    </table>
  );
};

export default PageContainer;
