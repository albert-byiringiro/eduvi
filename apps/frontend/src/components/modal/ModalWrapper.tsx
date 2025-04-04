import React from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import useDisableScroll from '../../hooks/useDisableScroll';
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
        className="relative overflow-hidden bg-white shadow-lg animate-zoom rounded-2xl w-[1060px] h-[800px] mx-[190px] my-[140px] p-12"
      >
        <button
          onClick={onClose}
          className="absolute z-10 text-2xl text-gray-500 right-6 top-6 hover:text-gray-800"
        >
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
}
