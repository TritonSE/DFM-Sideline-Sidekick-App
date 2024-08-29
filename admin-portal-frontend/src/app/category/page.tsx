"use client";

import { useSearchParams } from "next/navigation";

import { Category } from "../api/Categories";
import AnotherPage from "../page";

const CategoryDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryString = searchParams.get("category");
  const category = categoryString ? (JSON.parse(categoryString) as Category) : null;
  return (
    <AnotherPage>
      <div>
        <h1>Category Detail: {category.title}</h1>
      </div>
    </AnotherPage>
  );
};

export default CategoryDetail;
