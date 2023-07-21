import CheckoutItemsList from "../components/checkout-items-list";
import CheckoutSummary from "../components/checkout-summary";

const CheckoutPage= () => {
  return (
    <div className="h-full min-w-screen grid md:flex justify-between">
      <CheckoutItemsList/>
      <CheckoutSummary/>
    </div>
  );
};

export default CheckoutPage;
