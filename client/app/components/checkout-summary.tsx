"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../context/cart-context-provider";

const CheckoutSummary = () => {
  const { totalAmount, totalCartItems } = useCart();

  const router= useRouter();

  if(totalCartItems === 0) return <></>;

  return (
    <div className="flex justify-center md:w-1/3 lg:w-1/4 relative mx-2">
      <div className="flex flex-col grow md:fixed lg:p-8 mb-5 md:mt-40 md:h-60 text-center justify-around rounded-lg border-2 border-secondary-dark">
        <div className="text-2xl lg:text-4xl">Total {totalAmount} USD</div>
        <div className="grid md:flex">
          <button className="bg-primary-dark grow hover:-translate-y-1 text-white font-bold py-2 px-4 rounded m-4">
            Buy
          </button>
          <button
            className="bg-primary-dark grow hover:-translate-y-1 text-white font-bold py-2 px-4 rounded m-4"
            onClick={() => {
              router.back();
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
