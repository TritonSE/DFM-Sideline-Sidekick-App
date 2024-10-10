import React, { useEffect } from "react";

import CheckIcon from "../icons/check.svg";
import CloseIcon from "../icons/close.svg";

type IconProps = {
  "content-type": string;
  src: string;
};

type ToastProps = {
  backgroundColor: string;
  message: string;
  onClose: () => void;
  isError: boolean;
};

const Toast: React.FC<ToastProps> = ({ backgroundColor, message, onClose, isError = false }) => {
  useEffect(() => {
    // Set a timer to hide the toast after 10 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="top-20 right-10 fixed justify-center mb-4 z-50">
      <div
        style={{ backgroundColor }}
        className={`flex items-center justify-between w-auto py-4 px-6 rounded-lg transition-opacity duration-300 ease-in opacity-100 text-white`}
      >
        {!isError && (
          <img src={(CheckIcon as IconProps).src} alt="Check" className="w-4 h-4 mr-2" />
        )}
        <p className="text-sm mr-2">{message}</p>
        <button className="focus:outline-none" onClick={onClose}>
          <img src={(CloseIcon as IconProps).src} alt="Close" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
