// components
import MealCard from "./meal-card";

// interfaces
import Meal from "../common/types/meal-interface";

interface MealsGridProps {
  meals: Meal[];
  mealsLoading: boolean;
  notAvailableMeals: boolean;
  onCardClick: (meal: Meal) => void;
  onShoppingCartClick: (meal: Meal) => void;
}

const mealsTesting = [
  {
    strMeal: "Chilli prawn linguine",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    idMeal: "52839",
    price: 29,
  },
  {
    strMeal: "Fettuccine Alfredo",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
    idMeal: "53064",
    price: 82,
  },
  {
    strMeal: "Fettucine alfredo",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
    idMeal: "52835",
    price: 30,
  },
  {
    strMeal: "Grilled Mac and Cheese Sandwich",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
    idMeal: "52829",
    price: 75,
  },
  {
    strMeal: "Lasagna Sandwiches",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
    idMeal: "52987",
    price: 31,
  },
  {
    strMeal: "Lasagne",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    idMeal: "52844",
    price: 81,
  },
  {
    strMeal: "Pilchard puttanesca",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
    idMeal: "52837",
    price: 60,
  },
  {
    strMeal: "Spaghetti alla Carbonara",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    idMeal: "52982",
    price: 89,
  },
  {
    strMeal: "Venetian Duck Ragu",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg",
    idMeal: "52838",
    price: 31,
  },
];

const MealsGrid = ({
  meals,
  mealsLoading,
  notAvailableMeals,
  onCardClick,
  onShoppingCartClick,
}: MealsGridProps) => {

  // if(mealsLoading) return <div>Loading...</div>

  // if((!mealsLoading &&notAvailableMeals) || meals.length === 0) return <div>Not available meals</div>

  return (
    <div className="mx-2 grid shrink grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2 xl:gap-4 2xl:gap-8">
      {mealsTesting.length > 0 &&
        mealsTesting.map((meal) => (
          <MealCard
            meal={meal}
            onCardClick={onCardClick}
            onShoppingCartClick={onShoppingCartClick}
          />
        ))}
    </div>
  );
};

export default MealsGrid;
