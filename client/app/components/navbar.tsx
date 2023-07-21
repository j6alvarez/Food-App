import Image from "next/image";
import chef from "../../public/chef.png";

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-primary-dark flex justify-between">
      <h1 className="font-bold text-white font-mono text-6xl mx-10 py-2">
        Menu
      </h1>
      <div className="w-16 mx-10 py-2">
        <Image alt="chef" src={chef} />
      </div>
    </header>
  );
};

export default Navbar;
