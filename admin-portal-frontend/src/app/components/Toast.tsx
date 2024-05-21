import React from "react";

import { useEffect, useState } from "react";
import CloseIcon from "../icons/close.svg";
import CheckIcon from "../icons/check.svg";

type ToastProps = {
  backgroundColor: string;
  message: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ backgroundColor, message, onClose }) => {
  useEffect(() => {
    // Set a timer to hide the toast after 10 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-10 right-10 flex justify-center mb-4 z-50">
      <div
        style={{ backgroundColor: backgroundColor }}
        className={`flex items-center justify-between w-auto py-4 px-6 rounded-lg transition-opacity duration-300 ease-in opacity-100 text-white`}
      >
        <img src={CheckIcon.src} alt="Check" className="w-4 h-4 mr-2" />
        <p className="text-sm mr-2">{message}</p>
        <button className="focus:outline-none" onClick={onClose}>
          <img src={CloseIcon.src} alt="Close" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
