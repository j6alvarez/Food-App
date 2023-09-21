"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../context/cart-context-provider";

import StripeCheckout from "react-stripe-checkout";

const CheckoutSummary = () => {
  const { totalAmount, totalCartItems } = useCart();


  const onToken = (token:any) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token.id, amount_cents: totalAmount*100, email: token.email }),
    };

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/orders`,
      config
    )
      .then((res) => res.json())
      .then(responseJson => console.log(responseJson));
  };

  const router= useRouter();

  if(totalCartItems === 0) return <></>;

  return (
    <div className="flex justify-center md:w-1/3 lg:w-1/4 relative mx-2">
      <div className="flex flex-col grow md:fixed lg:p-8 mb-5 md:mt-40 md:h-60 text-center justify-around rounded-lg border-2 border-secondary-dark">
        <div className="text-2xl lg:text-4xl">Total {totalAmount} USD</div>
        <div className="grid md:flex">
          <button className="bg-primary-dark grow hover:-translate-y-1 text-white font-bold py-2 px-4 rounded m-4">
            <StripeCheckout
              token={onToken}
              stripeKey={`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`}
            />
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
