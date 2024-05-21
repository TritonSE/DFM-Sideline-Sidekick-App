"use client";

import React, { useState } from "react";
import { Category } from "./categoryRoutes";
import TrashIcon from "../icons/trash.svg";
import EditIcon from "../icons/edit.svg";

type PageItemProps = {
  id: string;
  title: string;
  page: string;
  visibility?: boolean;
};

const PageItem: React.FC<PageItemProps> = ({ id, page, title }) => {
  const [selectedValue, setSelectedValue] = useState("public");
  const [allowEdits, setAllowEdits] = useState(false);

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
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="hidden">Hidden</option>
        </select>
      </td>
      <td className="w-1/4 text-center py-3">{title}</td>
      <td className="w-1/4 text-center py-3">
        <button
          className="mr-3 bg-[#E5EFF5] p-2 rounded-full border border-black"
          onClick={() => setAllowEdits(!allowEdits)}
        >
          <img src={EditIcon.src} alt="Edit" className="w-4 h-4" />
        </button>
        <button className="bg-[#E5EFF5] p-2 rounded-full border border-black">
          <img src={TrashIcon.src} alt="Delete" className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export const PageContainer: React.FC<{ items: Category[] }> = ({ items: categories }) => {
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
          categories.map((category: Category, i) => {
            return category.items.map((page, j) => (
              <PageItem key={i + "-" + j} id={i + "-" + j} page={page} title={category.title} />
            ));
          })
        }
      </tbody>
    </table>
  );
};

export default PageContainer;
