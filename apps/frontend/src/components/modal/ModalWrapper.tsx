import React from 'react';
import useClickOutside from './useClickOutside';
import useDisableScroll from './useDisableScroll';
import { IoCloseOutline } from 'react-icons/io5';

type ModalWrapperProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ModalWrapper({ children, onClose }: ModalWrapperProps) {
  const modalRef = useClickOutside(onClose);
  useDisableScroll();

  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative animate-zoom min-h-[200px] w-[40%] max-w-md rounded-2xl bg-white p-10 shadow-lg sm:w-11/12 sm:p-8"
      >
        <button className="absolute text-gray-500 right-4 top-4 hover:text-gray-800">
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
}
