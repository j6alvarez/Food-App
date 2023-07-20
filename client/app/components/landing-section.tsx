import Image from "next/image";
import chefImage from "../../public/chef-image.png";

const LandingSection = () => {
  return (
    <section className="grow pr-4 mx-2 mt-250 flex shrink text-center w-3/4 justify-center">
      <div className="flex flex-col justify-start items-center py-25 mb-50">
        <div className="w-60 h-74">
        <Image alt="chef-image" src={chefImage} />
        </div>
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl xl:text-8xl">
            Welcome to <br />
            <span className="text-primary text-primary-400">
              our restaurant
            </span>
          </h2>
          <p className="text-2xl text-primary-600">
            Please select a category to see our menu
          </p>
      </div>
    </section>
  );};

export default LandingSection;