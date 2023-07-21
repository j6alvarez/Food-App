import CategoriesMenu from "./components/categories-menu";
import LandingSection from "./components/landing-section";
import ShoppingCart from "./components/shopping-cart";

const Home = () => {
  return (
    <>
      <div className="flex justify-between">
        <CategoriesMenu />
        <LandingSection />
        <ShoppingCart />
      </div>
    </>
  );
};

export default Home;
