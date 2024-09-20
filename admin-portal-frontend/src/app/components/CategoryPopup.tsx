import React, { ChangeEvent, useState } from "react";

import CloseIcon from "../icons/close.svg";

type IconProps = {
  "content-type": string;
  src: string;
};

type CategoryAddPopupProps = {
  onAdd: (name: string) => void;
  onCancel: () => void;
  type: string;
};

const CategoryAddPopup: React.FC<CategoryAddPopupProps> = ({ onAdd, onCancel, type }) => {
  const [name, setName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update state with the input value
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 p-8 rounded-md shadow-md flex flex-col justify-center">
        <button className="flex justify-end mb-4" onClick={onCancel}>
          <img src={(CloseIcon as IconProps).src} alt="Close" className="w-4 h-4" />
        </button>
        <div className="text-left">
          <h1 className="text-xl sm:text-2xl text-[#182B49] font-bold">
            Add a category to: <span className="text-[#00629B]">{type}</span>
          </h1>
          <p className="text-[#182B49]">Enter a name for this new category.</p>
          <p className="my-2 text-[#6C6C6C]">Name*</p>
          <input
            className="flex w-[100%] p-[13px_23px] items-start gap-[10px] rounded-[5px] border border-[#B4B4B4] bg-white"
            type="text"
            id="nameInput"
            value={name} // Bind the input value to the state
            onChange={handleChange} // Update state on every input change
            placeholder="Type a name for your new category"
          />

          <div className="flex justify-evenly mt-4 sm:mt-6">
            <button
              className="px-3 sm:px-4 py-2 bg-white text-[#00629B] rounded-md"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-4 sm:px-6 py-3 bg-[#00629B] text-white font-bold rounded-md"
              onClick={() => {
                onAdd(name);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAddPopup;
