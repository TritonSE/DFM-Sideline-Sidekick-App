"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Category } from "../api/Categories";
import EditIcon from "../icons/edit.svg";
import TrashIcon from "../icons/trash.svg";

import DeleteConfirmationPopup from "./DeletePopup";

type IconProps = {
  "content-type": string;
  src: string;
};

type PageItemProps = {
  id: string;
  category: Category;
  page: string;
  visibility?: boolean;
  onDeletePage: (categoryId: string, pageTitle: string) => Promise<void>;
};

const PageItem: React.FC<PageItemProps> = ({ id, page, category, onDeletePage }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    try {
      void onDeletePage(category._id, page);
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
      <td className="w-1/4 text-center py-3">Public</td>
      <td className="w-1/4 text-center py-3">{category.title}</td>
      <td className="w-1/4 text-center py-3">
        <button
          className="mr-3 bg-[#E5EFF5] p-2 rounded-full border border-black"
          onClick={() => {
            const encodedCategory = encodeURIComponent(JSON.stringify(category));
            const encodedTitle = encodeURIComponent(page); // Assuming you have a title variable
            const route = category.type === "Emergency" ? "/add-emergency" : "/add-principle";
            router.push(`${route}?category=${encodedCategory}&title=${encodedTitle}`);
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
          <DeleteConfirmationPopup
            onDelete={handleConfirmDelete}
            onCancel={handleCancelDelete}
            type={"page"}
          />
        ) : null}
      </td>
    </tr>
  );
};

export const PageContainer: React.FC<{
  items: Category[];
  onDeletePage: (categoryId: string, pageTitle: string) => Promise<void>;
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
                category={category}
                page={page}
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
