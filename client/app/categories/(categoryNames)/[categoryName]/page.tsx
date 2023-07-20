import { FC } from "react";
import CategoriesMenu from "@/app/components/categories-menu";
import MealsGrid from "@/app/components/meals-grid";

interface CategoryPageProps {
  params: {
    categoryName: string;
  }
}

const CategoryPage:FC<CategoryPageProps>= ({params}) => {
  return (<MealsGrid categoryName={params.categoryName} />);
};

export default CategoryPage;
