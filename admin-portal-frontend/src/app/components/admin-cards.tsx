"use client";

import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, deleteDoc, doc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Popup from './Popup';

interface Admin {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
}

const AdminCards: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const db = getFirestore();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'invitations'));
        const adminsList = querySnapshot.docs.map(doc => doc.data() as Admin);
        setAdmins(adminsList);
      } catch (error) {
        console.error("Error fetching admins: ", error);
      }
    };

    fetchAdmins();
  }, [db]);

  const deleteAdmin = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'invitations', id));
      setAdmins(admins.filter(admin => admin.email !== id));
      setPopupMessage('Physician deleted!');
      setShowPopup(true);
    } catch (error) {
      console.error("Error deleting admin: ", error);
    }
  };

  //having trouble with deleting account from firebase auth
//   const deleteAdmin = async (email: string) => {
//     try {
//       const response = await fetch('/api/deleteAdmin', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (!response.ok) {
//         console.log('deletion error')
//         throw new Error('Failed to delete admin');
//       }

//       setAdmins(admins.filter(admin => admin.email !== email));
//       setPopupMessage('Physician deleted!');
//       setShowPopup(true);
//     } catch (error) {
//       console.error("Error deleting admin:", error);
//     }
//   };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {admins.map((admin, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-5 pt-3">
            <button
              className="flex justify-end pt-1 w-full text-gray-500 hover:text-gray-900"
              onClick={() => deleteAdmin(admin.email)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          <div className="flex items-center space-x-4">
            {/* <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src="" alt="admin picture" />
            </div> */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{admin.firstName} {admin.lastName}</h2>
              <p className="text-gray-600">{admin.title}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 truncate mb-0.5">{admin.email}</p>
            <p className="text-gray-600">{admin.phone}</p>
          </div>
        </div>
      ))}

        {showPopup && (
        <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
        )}
    </div>
  );
};

export default AdminCards;
