"use client";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

// Components
import Link from "next/link";

// interfaces
import Category from "../common/types/category-interface";
// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CategoriesMenu = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [categorySelected, setCategorySelected] = useState<String>("");

  const pathname= usePathname();

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories", err);
      });;
  }, []);

  useEffect(()=>{
    if(pathname.includes("categories")){
      setCategorySelected(pathname.split("/")[2]);
    }
  },[pathname])

  return (
    <div className="lg:flex lg:flex-row lg:w-1/6 2xl:w-1/5 lg:pr-12 min-h-screen">
      <div className="grow flex flex-col py-8 p-3 h-full w-full bg-primary-dark lg:w-40 xl:w-70">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">Meal Categories</h2>
          </div>
          <div className="flex-1">
            {!isLoading ? (
              <ul className="pt-2 pb-4 space-y-1 text-md">
                {categories.length > 0 &&
                  categories.map((category) => (
                    <li
                      key={category.idCategory}
                      className={`rounded-sm hover:-translate-y-1 ${
                        categorySelected === category.strCategory &&
                        "bg-secondary-dark"
                      }`}
                    >
                      <Link
                        key={category.idCategory}
                        href={`/categories/${category.strCategory}`}
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <span className="text-gray-100">
                          {category.strCategory}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : (
              <div className="pt-8 pb-4 space-y-1 text-lg text-gray-100">
                Loading categories...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
