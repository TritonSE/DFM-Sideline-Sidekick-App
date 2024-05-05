import React from "react";

import CloseIcon from "../icons/close.svg";

type DeleteConfirmationPopupProps = {
  onDelete: () => void;
  onCancel: () => void;
};

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  onDelete,
  onCancel,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-2/5 h-2/6 p-8 rounded-md shadow-md flex flex-col justify-center">
        <button className="flex justify-end mb-4" onClick={onCancel}>
          <img src={CloseIcon.src} alt="Close" className="w-4 h-4" />
        </button>
        <div className="text-center">
          <h1 className="text-2xl text-[#182B49] font-bold">
            Are you sure you want to delete
            <br />
            this category?
          </h1>
          <p className="my-4 text-[#182B49]">
            This category cannot be restored and will not be saved.
          </p>
          <div className="flex justify-evenly mt-12">
            <button className="px-4 py-2 bg-white text-[#00629B] rounded-md" onClick={onCancel}>
              No, keep
            </button>
            <button
              className="mr-2 px-6 py-3 bg-[#00629B] text-white font-bold rounded-md"
              onClick={onDelete}
            >
              Yes, delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
