"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export const revalidate = 86400;

export function generateMetadata() {
  return {
    title: "Category",
  };
}

const Category = () => {
  const router = useRouter();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(`/api/category`);
      const categoryTypes = await res.json();

      setCategory(categoryTypes);
    };
    getCategory();
  }, []);

  if (!category.length) {
    <div className="text-center">
      <p className="mt-10">Sorry, no type available</p>
      <Link href="/">Back to Home</Link>
    </div>;
  }

  const handleTypeClick = (type) => {
    router.push(`/tags/${type}`);
  };

  return (
    <>
      <p className="text-3xl mt-4 mb-0">Category</p>
      <section className="w-full flex-start flex-col mt-5">
        <div className="grid grid-cols-2 md:grid-rows-4 md:grid-flow-col gap-4">
          {category.map((type) => (
            <div
              className="p-3 rounded-lg border border-1 cursor-pointer bg-slate-100 w-48"
              onClick={() => {
                handleTypeClick && handleTypeClick(type);
              }}
            >
              <p className="text-lg uppercase font-opensans font-semibold">
                {type}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
