// interfaces
import Meal from "../common/types/meal-interface"

// Components
import Image from "next/image";

// icons
import addToCart from '../../public/add-to-cart.svg'

interface MealCardProps {
  meal: Meal;
  onShoppingCartClick: (meal: Meal) => void;
}

const MealCard = ({meal, onShoppingCartClick}: MealCardProps) => {
  return (
    <div
      key={meal.idMeal}
      className="flex flex-col relative grow-0 justify-between md:mt-2 items-center my-2 rounded-lg shadow-lg shadow-gray-500 bg-primary-dark cursor-pointer w-34 lg:w-58 xl:w-64 4xl:w-80 max-h-96"
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
        <p className="text-base line-clamp-6 md:text-lg mb-2 font-bold leading-relaxed text-gray-100">
          {meal.strMeal}
        </p>
        <small className="text-sm leading-5 text-gray-500 text-gray-400">
          {meal.price} USD
        </small>
      </div>
      <div className="absolute right-4 bottom-4 w-4 h-4 lg:w-8 lg:h-8">
        <Image
          alt="add-to-cart"
          className="bg-white rounded-full border-secondary-dark"
          src={addToCart}
          onClick={() => onShoppingCartClick(meal)}
        />
      </div>
    </div>
  );
}

export default MealCard;