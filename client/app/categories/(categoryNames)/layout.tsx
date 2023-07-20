import {FC, ReactNode} from "react";
import CategoriesMenu from "@/app/components/categories-menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full flex justify-between">
      <CategoriesMenu />
      {children}
    </div>
  );
}

export default Layout;
