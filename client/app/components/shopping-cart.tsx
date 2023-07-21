"use client";
import Image from "next/image";
import shoppingCart from '../../public/shopping-cart.svg'

import { useCart } from "../context/cart-context-provider";
import Link from "next/link";

const ShoppingCart = () => {

  const { totalCartItems } = useCart();

  return (
    
    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary-dark fixed right-10 bottom-10 rounded-2xl justify-center items-center hover:-translate-y-1">
      <Link href="/checkout">
        {totalCartItems> 0 &&
          (<span className="text-primary-dark font-bold text-center text-xs lg:text-md absolute h-4 w-4 lg:h-6 lg:w-6 ml-8 lg:ml-12 bg-white rounded-full lg:pt-1">
            {totalCartItems}
          </span>)}
        <div className="p-2">
          <Image alt="shopping-cart" src={shoppingCart} />
        </div>
      </Link>
    </div>
  );
};

export default ShoppingCart;
