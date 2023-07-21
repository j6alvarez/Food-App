import { FC } from "react";
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
