import type { FC } from "react";

interface HeaderProps {
  OpenMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  OpenMenuMobile: boolean;
  setOpenMenuMobile: (value: boolean) => void;
}

export const Header: FC<HeaderProps> = ({
  OpenMenu,
  setOpenMenu,
  OpenMenuMobile,
  setOpenMenuMobile,
}) => {
  return (
    <div className="flex justify-between h-[4.5rem] my-auto border-b-gray-200 border-b dark:border-b-gray-700  dark:bg-gray-900">
      <div className="my-auto  lg:flex lg:justify-between hidden items-center py-2 space-x-2  ">
        <button
          onClick={() => setOpenMenu(!OpenMenu)}
          type="button"
          className=" dark:text-white p-2.5 border-gray-200 text-gray-500  transition-all duration-500  "
        >
          {OpenMenu ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="my-auto lg:hidden  flex items-center py-2 space-x-2  ">
        <button
          onClick={() => setOpenMenuMobile(!OpenMenuMobile)}
          type="button"
          className=" dark:text-white p-2.5 border-gray-200 text-gray-500  transition-all duration-500  "
        >
          {OpenMenu ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="my-auto w-[75vh]">
     
      </div>

      <div></div>
    </div>
  );
};
