// interfaces
import CartItem from "../common/types/cart-item-interface";
import Meal from "../common/types/meal-interface";

// Components
import Image from "next/image";

// icons
import addToCart from "../../public/add-to-cart.svg";
import removeFromCart from "../../public/remove-from-cart.svg";

interface CheckoutItemProps {
  cartItem: CartItem;
  onAdd: (meal: Meal) => void;
  onRemove: (idMeal: string) => void;
}

const CheckoutItem = ({ cartItem, onAdd, onRemove }: CheckoutItemProps) => {
  return (
    <div
      key={cartItem.idMeal}
      className="flex flex-row justify-around md:mt-10 items-center my-2 rounded-lg shadow-lg shadow-gray-500 bg-primary-dark h-35 w-50 md:w-45 lg:w-70 xl:w-86 h-30"
    >
      <div className="w-30 h-30 p-2">
        <Image
          alt={cartItem.idMeal}
          width={200}
          height={200}
          src={cartItem.strMealThumb}
          className="rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col grow justify-between text-start w-full">
        <p className="text-base md:text-lg mb-2 font-bold text-gray-100">
          {cartItem.strMeal}
        </p>
      </div>
      <div className="flex flex-row h-full pr-4 md:pr-10">
        <div
          className="w-8 h-full flex items-center justify-center md:w-14 cursor-pointer"
          onClick={() => {
            const { idMeal, strMeal, strMealThumb, price } = cartItem;
            onAdd({ idMeal, strMeal, strMealThumb, price });
          }}
        >
          <Image alt="add-to-cart" src={addToCart} />
        </div>
        <div className="h-full flex grow-0 items-center p-4">
          <p className="text-md text-white">{cartItem.quantity}</p>
        </div>
        <div
          className="w-8 h-full flex items-center justify-center md:w-14 items-center cursor-pointer"
          onClick={() => {
            onRemove(cartItem.idMeal);
          }}
        >
          <Image alt="remove-from-cart" src={removeFromCart} />
        </div>
        <div className="h-full flex items-center">
          <p className="text-md text-white">
            {cartItem.price * cartItem.quantity} USD
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
