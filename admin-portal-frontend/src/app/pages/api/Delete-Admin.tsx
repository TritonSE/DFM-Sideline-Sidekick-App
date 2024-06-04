// pages/api/deleteAdmin.ts
import { NextApiRequest, NextApiResponse } from "next";

import { auth, firestore } from "../../firebase-admin";

const deleteAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const { email } = req.body;

    try {
      // Delete the admin from Firestore
      const docRef = firestore.collection("invitations").doc(email);
      await docRef.delete();

      // Delete the admin from Firebase Authentication
      const user = await auth.getUserByEmail(email);
      await auth.deleteUser(user.uid);

      res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
      console.error("Error deleting admin:", error);
      res.status(500).json({ error: "Failed to delete admin" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default deleteAdmin;
