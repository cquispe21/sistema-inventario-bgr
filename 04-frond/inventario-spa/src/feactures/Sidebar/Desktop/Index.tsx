import Contentnav from "../Contentnav";


interface SidebarDesktopProps {
  OpenMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const SidebarDesktop: React.FC<SidebarDesktopProps> = ({ OpenMenu, setOpenMenu, isHovered, setIsHovered }) => {
  return (
    <div
      className={` bg-[#004977] dark:bg-gray-800 lg:table-cell hidden relative   h-screen z-[90]   ease-in-out hover:ml-0  ${
        OpenMenu
          ? "lg:w-[259px]  transition-all duration-[460ms]"
          : "lg:w-20   transition-all  duration-[400ms] "
      }`}
    >
      {OpenMenu ? (
        <div className="p-5 pt-8">
          <div>
            <Contentnav
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              OpenMenu={OpenMenu}
              setOpenMenu={setOpenMenu}
              OpenMenuMobile={false} 
              setOpenMenuMobile={() => {}} 
            />
          </div>
        </div>
      ) : (
        <div
          className={`bg-[#004977] dark:bg-gray-800   h-full   ${
            isHovered
              ? " lg:w-[259px] transition-all duration-[460ms]   "
              : "lg:w-20  transition-all  duration-[400ms]"
          }  transition-all z-[90] p-5 pt-8 `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <Contentnav
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              OpenMenu={OpenMenu}
              setOpenMenu={setOpenMenu}
              OpenMenuMobile={false} 
              setOpenMenuMobile={() => {}} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarDesktop;
