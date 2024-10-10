"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import { addAdmin } from "../api/admins";
import CloseIcon from "../icons/close.svg";

type IconProps = {
  "content-type": string;
  src: string;
};

const InviteAdmin: React.FC<{
  isSuperUser: boolean;
}> = ({ isSuperUser }) => {
  const [adminForm, setAdminForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    superuser: false,
  });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminForm({ ...adminForm, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, title, email, phone, superuser } = adminForm;

    try {
      await addAdmin({
        firstName,
        lastName,
        title,
        email,
        phoneNumber: phone,
        superUser: superuser,
      });
      setShowModal(false);
      setAdminForm({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        phone: "",
        superuser: false,
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-between w-full p-4">
      <h1 className="text-[#182B49] mt-[20px] text-start text-2xl font-bold">Admins</h1>
      {isSuperUser && (
        <button
          className="bg-dfm-blue text-white py-2 px-4 rounded"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Admin
        </button>
      )}

      {showModal && (
        <div className="fixed top-[36px] left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 p-8 rounded-md shadow-md flex flex-col justify-center">
            <button
              className="flex justify-end mb-4"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <img src={(CloseIcon as IconProps).src} alt="Close" className="w-4 h-4" />
            </button>
            {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
            <form onSubmit={handleSubmit} className="w-full">
              <p className="font-semibold text-dfm-navy text-lg mb-1">Physician Details</p>
              <div className="mb-2">
                <label htmlFor="firstName" className="text-slate-600 block font-sm">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="p-2 border w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="lastName" className="block text-slate-600 font-sm">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="p-2 border w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="title" className="block text-slate-600 font-sm">
                  Title (ex. HS Clinical Professor)
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="p-2 border w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  onChange={handleInputChange}
                />
              </div>
              <p className="font-semibold text-lg mb-2 text-dfm-navy">Contact Info</p>
              <div className="mb-2">
                <label htmlFor="email" className="block text-slate-600 font-sm">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 border w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="phone" className="block text-slate-600 font-sm">
                  Phone Number (format: xxx-xxx-xxxx)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="p-2 border w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="superuser" className="text-slate-600 font-sm">
                  Add remove/add admin privileges:&nbsp;
                </label>
                <input
                  type="checkbox"
                  id="superuser"
                  name="superuser"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="text-dfm-blue py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-dfm-blue text-white py-2 px-4 rounded">
                  Save
                </button>
              </div>
              {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteAdmin;
