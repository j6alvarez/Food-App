"use client";
import { useState, useEffect } from "react";

// components
import MealCard from "./meal-card";

// interfaces
import Meal from "../common/types/meal-interface";

import { useCart } from "../context/cart-context-provider";

interface MealsGridProps {
  categoryName: string;
}


const MealsGrid = ({categoryName}:MealsGridProps) => {
  const [meals, setMeals] = useState<Meal[] | []>([]);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [noMeals, setNoMeals] = useState<Boolean>(false);

  const { addToCart } =useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meals", err);
        setNoMeals(true);
      });
  }, []);

  const onShoppingCartClick = (item:Meal) => {
    addToCart(item);
  };

  if(isLoading) return (
    <div className="grow pr-4 mx-2 grid shrink w-full">
      Loading Meals...
    </div>
  );

  if (noMeals || (meals.length === 0 && !isLoading))
    return (
      <div className="grow pr-4 mx-2 grid shrink">Not available meals</div>
    );

  return (
    <div className="grow pr-4 mx-2 grid shrink grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-4 2xl:gap-8">
      {meals.length > 0 &&
        meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            onShoppingCartClick={onShoppingCartClick}
          />
        ))}
    </div>
  );
};

export default MealsGrid;
