import CategoriesMenu from "./components/categories-menu";
import LandingSection from "./components/landing-section";

const Home = ()=>{
  return (
    <>
      <div className="flex justify-between">
        <CategoriesMenu />
        <LandingSection />
      </div>
    </>
  );
}

export default Home;