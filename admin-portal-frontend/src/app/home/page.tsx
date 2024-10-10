"use client";

import { onAuthStateChanged } from "firebase/auth"; // Import necessary Firebase Auth function
import React, { useEffect, useState } from "react";

import { checkSuperAdmin } from "../api/admins";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminCards from "../components/admin-cards";
import InviteAdmin from "../components/invite-admin";
import { auth } from "../firebase-config";

export default function Home() {
  const [isSuperUser, setIsSuperUser] = useState(false);

  const checkSuper = async (email: string) => {
    const status = await checkSuperAdmin(email);
    setIsSuperUser(status); // Set isSuperUser based on the document data
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        void checkSuper(user.email ? user.email : ""); // Check if the user is a superuser
      }
    });

    // Clean up the listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Function to check if the user is a superus
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-start justify-center min-h-screen w-screen overflow-auto p-20 bg-[#E5EFF5]">
        <InviteAdmin isSuperUser={isSuperUser} />
        <AdminCards isSuperUser={isSuperUser} />
      </div>
    </ProtectedRoute>
  );
}
