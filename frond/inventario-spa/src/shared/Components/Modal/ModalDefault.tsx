import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import type { JSX } from "react/jsx-dev-runtime";

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
  style,
}) => {
  const handleClose = () => {
    if (!disabled) onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={handleClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Backdrop className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/* Container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Panel */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95 translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-2"
            >
              <Dialog.Panel
                className={
                  style
                    ? style
                    : "w-full max-w-xl overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl dark:bg-gray-800"
                }
              >
                {title && (
                  <Dialog.Title className="text-lg flex justify-center font-medium leading-6 text-gray-900 dark:text-gray-300">
                    {title}
                  </Dialog.Title>
                )}

                <div className={title ? "mt-4" : ""}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
