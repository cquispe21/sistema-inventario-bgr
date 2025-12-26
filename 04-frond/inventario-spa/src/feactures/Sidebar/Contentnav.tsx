import { Link } from "react-router-dom";

interface ContentnavProps {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  OpenMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  OpenMenuMobile: boolean;
  setOpenMenuMobile: (value: boolean) => void;
}
function Contentnav({
  isHovered,
  OpenMenu,
  OpenMenuMobile,
}: ContentnavProps) {
  return (
    <>
      <nav className="mt-6">
        <button
          type="button"
          className={`group w-full rounded-md bg-gray-100  ${
            OpenMenu ? "p-0" : "p-0"
          } text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
          id="options-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="flex w-full items-center justify-between">
            <span className="flex min-w-0 items-center justify-between space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 p-1.5 w-10 flex-shrink-0 rounded-full dark:text-white dark:group-hover:text-black "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
          </span>
        </button>
        <ul className="space-y-1">
          <>
         

                    <Link to="/productos">
              <li
                className={` group flex hover:bg-gray-200 hover:text-gray-900  text-gray-300 items-center rounded-md  px-2 py-2 text-sm font-medium  peer-checked:bg-slate-900 
                       `}
              >
                <svg
                  className="mr-3 h-6 w-6 flex-shrink-0  my-auto dark:group-hover:text-black group-hover:text-black"
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {(isHovered && !OpenMenu) || OpenMenu || OpenMenuMobile ? (
                  <p className=" dark:group-hover:text-black group-hover:text-black">
                    PRODUCTOS
                  </p>
                ) : (
                  <></>
                )}
              </li>
            </Link>




                      <Link to="/transacciones">
              <li
                className={` group flex hover:bg-gray-200 hover:text-gray-900  text-gray-300 items-center rounded-md  px-2 py-2 text-sm font-medium  peer-checked:bg-slate-900 
                       `}
              >
                <svg
                  className="mr-3 h-6 w-6 flex-shrink-0  my-auto dark:group-hover:text-black group-hover:text-black"
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {(isHovered && !OpenMenu) || OpenMenu || OpenMenuMobile ? (
                  <p className=" dark:group-hover:text-black group-hover:text-black">
                   TRANSACCIONES
                  </p>
                ) : (
                  <></>
                )}
              </li>
            </Link>


              <li


onClick={
 
  () => {    localStorage.removeItem("token_taxflash");
    window.location.href = "/login";
  }
}

                className={` group flex hover:bg-gray-200 hover:text-gray-900  text-gray-300 items-center rounded-md  px-2 py-2 text-sm font-medium  peer-checked:bg-slate-900 
                       `}
              >
                <svg
                  className="mr-3 h-6 w-6 flex-shrink-0  my-auto dark:group-hover:text-black group-hover:text-black"
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {(isHovered && !OpenMenu) || OpenMenu || OpenMenuMobile ? (
                  <p className=" dark:group-hover:text-black group-hover:text-black">
                   cerrar sesión
                  </p>
                ) : (
                  <></>
                )}
              </li>
       
          </>
        </ul>

        {/* <Usuario
          isHovered={props.isHovered}
          setIsHovered={props.setIsHovered}
          OpenMenu={props.OpenMenu}
          setOpenMenu={props.setOpenMenu}
          OpenMenuMobile={props.OpenMenuMobile}
          setOpenMenuMobile={props.setOpenMenuMobile}
        /> */}
      </nav>
    </>
  );
}

export default Contentnav;
