import { Outlet } from "react-router-dom";
import SidebarDesktop from "../Sidebar/Desktop/Index";
import SidebarMobile from "../Sidebar/Mobile";
import { Header } from "../Header/Header";
import { useState, type FC } from "react";



export const Inicio: FC = () => {
  const [OpenMenu, setOpenMenu] = useState(true);
  const [OpenMenuMobile, setOpenMenuMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex dark:bg-gray-900   relative">
      <SidebarDesktop
        OpenMenu={OpenMenu}
        setOpenMenu={setOpenMenu}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <SidebarMobile
        OpenMenuMobile={OpenMenuMobile}
        setOpenMenuMobile={setOpenMenuMobile}
      />
      <div className="flex flex-col h-screen flex-1 overflow-auto duration-200 transition-colors relative ">
        <Header
          OpenMenu={OpenMenu}
          setOpenMenu={setOpenMenu}
          OpenMenuMobile={OpenMenuMobile}
          setOpenMenuMobile={setOpenMenuMobile}
        />
        <main className="h-screen  bg-white  mx-5 my-4 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Inicio;
