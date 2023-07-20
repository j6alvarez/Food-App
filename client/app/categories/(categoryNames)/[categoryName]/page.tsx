import CategoriesMenu from "@/app/components/categories-menu";
import MealsGrid from "@/app/components/meals-grid";

const CategoryPage= () => {
  return (
      <div className="h-full w-full flex justify-between">
        <CategoriesMenu />
        <MealsGrid />
      </div>
  );
};

export default CategoryPage;
