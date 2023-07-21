"use client";

import CheckoutItem from "./checkout-item";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cart-context-provider";

const CheckoutItemsList = () => {
  const router = useRouter();

  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div className="flex flex-col grow pr-4 mx-2 mt-50 shrink text-center w-full md:w-3/4 justify-center">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CheckoutItem
            key={item.idMeal}
            cartItem={item}
            onAdd={addToCart}
            onRemove={removeFromCart}
          />
        ))
      ) : (
        <div className="flex flex-col mt-20 justify-center items-center min-w-screen">
          <div className="text-2xl w-full">No items in cart</div>
          <button
            className="bg-primary-dark hover:-translate-y-1 text-white font-bold py-2 px-4 rounded m-4 w-40"
            onClick={() => {
              router.back();
            }}
          >
            Go back
          </button>
        </div>
      )}
      {cartItems.length > 0 && (
        <button
          className="bg-primary-dark hover:-translate-y-1 text-white font-bold py-2 px-4 rounded m-4"
          onClick={() => {
            clearCart();
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CheckoutItemsList;
