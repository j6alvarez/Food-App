"use client";
import { useState, useContext, ReactNode, useMemo } from "react";

import {
  CartItem,
  CartContext,
  CartContextType,
  Meal,
} from "./cart-context";

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = ({ idMeal, strMeal, price, strMealThumb }: Meal) => {
    setCart((prevCart: CartItem[]) => {
      const existingItemIndex = prevCart.find((item) => item.idMeal === idMeal);

      if (existingItemIndex) {
        const updatedCart = prevCart.map((item:CartItem) => {
          if (item.idMeal === idMeal) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });
        return updatedCart;
      }

      const updatedCart = [
        ...prevCart,
        { idMeal, quantity: 1, price, strMeal, strMealThumb },
      ];
      return updatedCart;
    });
  };

  const removeFromCart = (idMeal:string) => {
    setCart((prevCart: CartItem[]) => { 
      const existingItemIndex = prevCart.find((item) => item.idMeal === idMeal);

      if (existingItemIndex && existingItemIndex.quantity !== 1) {
        const updatedCart = prevCart.map((item) => {
          if (item.idMeal === idMeal) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        });
        return updatedCart;
      }else if(existingItemIndex && existingItemIndex.quantity === 1){
        const updatedCart = prevCart.filter((item) => item.idMeal !== idMeal);
        return updatedCart;
      }

      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartCount = useMemo(()=> cart.reduce((acc, item) => acc + item.quantity, 0),[cart])

  const totalAmount = useMemo(()=> cart.reduce((acc, item) => acc + item.quantity * item.price, 0),[cart])

  const value = useMemo(
    () => ({
      cartItems: cart,
      totalCartItems: totalCartCount,
      totalAmount,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => useContext(CartContext);
