"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { Admin, deleteAdminByEmail, getAllAdmins } from "../api/admins";

import DeleteConfirmationPopup from "./DeletePopup";
import Toast from "./Toast";

const AdminCards: React.FC<{
  isSuperUser: boolean;
}> = ({ isSuperUser }) => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [deleteEmail, setDeleteEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminsResponse = await getAllAdmins();
        setAdmins(adminsResponse);
      } catch (error) {
        console.log("Fetch admins failed.");
      }
    };

    void fetchData();
  }, [admins]);

  const deleteAdmin = async (id: string) => {
    try {
      setModalText("Admin deleted");
      const response = await deleteAdminByEmail(id);
      if (!response.success) {
        setModalText("Error deleting admin");
      }
      setShowModal(false);
      setShowToast(true);
    } catch (error) {
      console.error("Error deleting admin: ", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {admins.map((admin, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 py-3">
          {isSuperUser && (
            <button
              className="flex justify-end pt-1 w-full text-gray-500 hover:text-gray-900"
              onClick={() => {
                setDeleteEmail(admin.email);
                setShowModal(true);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
          <div className="flex items-center space-x-4">
            {/* <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src="" alt="admin picture" />
            </div> */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {admin.firstName} {admin.lastName}
              </h2>
              <p className="text-gray-600">{admin.title}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 truncate mb-0.5">{admin.email}</p>
            <p className="text-gray-600">{admin.phoneNumber}</p>
          </div>
        </div>
      ))}
      {showToast && (
        <Toast
          backgroundColor={modalText === "Admin deleted" ? "#000000" : "#FF0000"}
          message={modalText}
          onClose={() => {
            setShowToast(false);
          }}
          isError={modalText === "Admin deleted" ? false : true}
        />
      )}
      {showModal && (
        <DeleteConfirmationPopup
          onDelete={() => void deleteAdmin(deleteEmail)}
          onCancel={() => {
            setShowModal(false);
          }}
          type={"admin"}
        />
      )}
    </div>
  );
};

export default AdminCards;
