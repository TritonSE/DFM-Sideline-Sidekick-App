"use client";

import { doc, setDoc } from "firebase/firestore";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { db } from "../firebase-config";

const InviteAdmin = () => {
  const [adminForm, setAdminForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminForm({ ...adminForm, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, title, email, phone } = adminForm;

    try {
      await setDoc(doc(db, "invitations", email), { firstName, lastName, title, email, phone });
      setShowModal(false);
      setAdminForm({ firstName: "", lastName: "", title: "", email: "", phone: "" });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-end w-full p-4">
      <button
        className="bg-dfm-blue text-white py-2 px-4 rounded"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Admin
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white shadow-xl rounded-lg p-8 flex flex-col w-full max-w-md">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl text-dfm-navy font-bold">Add a new Admin</h2>
            <p className="mb-4 text-dfm-navy">
              Register a physician to your admin directory below.
            </p>
            {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
            <form onSubmit={handleSubmit} className="w-full">
              <p className="font-semibold text-dfm-navy text-lg mb-1">Physician Details</p>
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
                <label htmlFor="phone" className="block text-slate-600 font-sm">
                  Phone Number (format: xxx-xxx-xxxx)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="p-2 border w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
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
