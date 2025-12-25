import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Contentnav from "../Contentnav";
interface SidebarMobileProps {
  OpenMenuMobile: boolean;
  setOpenMenuMobile: (value: boolean) => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ OpenMenuMobile, setOpenMenuMobile }) => {
  return (
    <Transition.Root show={OpenMenuMobile} as={Fragment}>
      <Dialog as="div" className=" z-40 lg:hidden " onClose={setOpenMenuMobile}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex p-5 pt-8  w-72 flex-col overflow-y-auto bg-[#004977] pb-12 shadow-xl">
              <div className="flex   pb-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpenMenuMobile(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                
              </div>
              <div>
            <Contentnav
              OpenMenu={false}
              isHovered={false}
              setIsHovered={() => {}}
              OpenMenuMobile={OpenMenuMobile}
              setOpenMenu={() => {}}
              setOpenMenuMobile={setOpenMenuMobile}
            />
          </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SidebarMobile;
