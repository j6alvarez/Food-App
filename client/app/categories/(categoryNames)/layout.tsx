import {FC, ReactNode} from "react";
import CategoriesMenu from "@/app/components/categories-menu";
import ShoppingCart from "@/app/components/shopping-cart";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full flex justify-between">
      <CategoriesMenu />
      {children}
      <ShoppingCart />
    </div>
  );
}

export default Layout;
