import { createContext } from "react";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  price: number;
}

export type CartItem = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  price: number;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  totalCartItems: number;
  totalAmount: number;
  addToCart: (item: Meal) => void;
  removeFromCart: (idMeal: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalCartItems: 0,
  totalAmount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
