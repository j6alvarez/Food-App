import CategoriesMenu from "./components/categories-menu";
import MealsGrid from "./components/meals-grid";
import Navbar from "./components/navbar";

const Home = ()=>{
  return (
    <>
    <div className="flex justify-around">
      <CategoriesMenu categories={[]} categoriesLoading notAvailableCategories onCategoryClick={()=>{}}/>
      <MealsGrid meals= {[]} mealsLoading notAvailableMeals onCardClick={()=>{}} onShoppingCartClick={()=>{}}/>
    </div>
    </>
  )
}

export default Home;