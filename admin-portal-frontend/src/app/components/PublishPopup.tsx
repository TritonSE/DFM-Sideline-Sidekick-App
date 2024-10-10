import React from "react";

import CloseIcon from "../icons/close.svg";

type IconProps = {
  "content-type": string;
  src: string;
};

type PublishPopupProps = {
  onPublish: () => void;
  onCancel: () => void;
};

const PublishPopup: React.FC<PublishPopupProps> = ({ onPublish, onCancel }) => {
  return (
    <div className="fixed top-[36px] left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 p-8 rounded-md shadow-md flex flex-col justify-center">
        <button className="flex justify-end mb-4" onClick={onCancel}>
          <img src={(CloseIcon as IconProps).src} alt="Close" className="w-4 h-4" />
        </button>
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl text-[#182B49] font-bold">Publish page changes?</h1>
          <p className="my-4 text-[#182B49]">New changes will be saved to the page.</p>
          <div className="flex justify-evenly mt-4 sm:mt-6">
            <button
              className="px-3 sm:px-4 py-2 bg-white text-[#00629B] rounded-md"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-4 sm:px-6 py-3 bg-[#00629B] text-white font-bold rounded-md"
              onClick={onPublish}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishPopup;
