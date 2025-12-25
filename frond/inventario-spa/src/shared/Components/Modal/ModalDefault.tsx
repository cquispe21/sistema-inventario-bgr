import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
interface ModalGeneralIPropsItems {
  title?: string;
  style?: string;
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  disabled?: boolean;
}
export const ModalGeneral: React.FC<ModalGeneralIPropsItems> = ({
  isOpen,
  onClose,
  children,
  title,
  disabled,
  style
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={`fixed inset-0 z-[100] overflow-y-auto`}
          onClose={disabled ? () => { } : onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={style ? style : `inline-block max-w-xl  w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl`}>
                <Dialog.Title
                  as="h3"
                  className="text-lg flex justify-center font-medium leading-6 dark:text-gray-300 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-4">{children}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
