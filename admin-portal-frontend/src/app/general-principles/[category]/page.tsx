import React from "react";
import { getAllCategories } from "@/app/api/Categories";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.title,
  }));
}

interface CategoryDetailProps {
  params: {
    category: string;
  };
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ params }) => {
  const { category } = params;

  return (
    <div>
      <h1>Category Detail: {category}</h1>
    </div>
  );
};

export default CategoryDetail;
