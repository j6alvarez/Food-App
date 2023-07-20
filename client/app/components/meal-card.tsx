// interfaces
import Meal from "../common/types/meal-interface"

// Components
import Image from "next/image";

interface MealCardProps {
  meal: Meal;
  onCardClick: (meal: Meal) => void;
  onShoppingCartClick: (meal: Meal) => void;
}

const MealCard = ({meal, onCardClick, onShoppingCartClick}: MealCardProps) => {
  return (
    <div
      key={meal.idMeal}
      className="flex flex-col grow-0 justify-between md:mt-2 items-center my-2 rounded-lg shadow-lg shadow-gray-500 bg-primary-dark cursor-pointer w-38 lg:w-64"
    >
      <div
        className="w-38 lg:w-62 md:mt-4 justify-self-center"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Image
          alt={meal.strMeal}
          src={meal.strMealThumb}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>

      <div className="p-4 flex flex-col grow justify-between text-start w-full">
        <p className="text-base md:text-lg mb-2 font-bold leading-relaxed text-gray-800 text-gray-300">
          {meal.strMeal}
        </p>
        <small className="text-sm leading-5 text-gray-500 text-gray-400">
          {meal.price} USD
        </small>
      </div>
    </div>
  );
}

export default MealCard;