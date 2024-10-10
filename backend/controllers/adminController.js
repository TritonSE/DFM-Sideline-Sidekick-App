import { Admin } from "../models/adminModel.js";
import admin from "../firebaseAdmin.js";

export const addAdmin = async (req, res) => {
  try {
    // Extract data from the request body
    const { email, firstName, lastName, phoneNumber, title, superUser } = req.body;
    const newSuper = superUser == "on" ? true : false;
    // Create a new Category instance
    const newAdmin = new Admin({
      email,
      firstName,
      lastName,
      phoneNumber,
      title,
      superUser: newSuper,
    });
    console.log(newAdmin);

    // Save the new category to the database
    const savedAdmin = await newAdmin.save();

    // Respond with the saved category data
    res.status(201).json(savedAdmin);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const checkAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: req.params.email });
    if (existingAdmin) {
      res.status(200).json(true); // Admin exists
    } else {
      res.status(200).json(false);
    }
  } catch (error) {
    console.error("Error checking if admin exists:", error);
    throw new Error("Internal Server Error");
  }
};

export const deleteAdminByEmail = async (req, res) => {
  try {
    // Find the admin by email and delete them
    if (req.params.email == "williamwrightandrew@gmail.com") {
      return res.status(500).json({ error: "Cannot delete main admin." });
    }
    const deletedAdmin = await Admin.findOneAndDelete({ email: req.params.email });

    if (!deletedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const userRecord = await admin.auth().getUserByEmail(req.params.email);
    const uid = userRecord.uid;

    // Delete the user by UID
    await admin.auth().deleteUser(uid);

    // Respond with the deleted admin data
    res.status(200).json({ message: "Admin deleted successfully", deletedAdmin });
  } catch (error) {
    console.error("Error deleting admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    // Retrieve all admins from the database
    const admins = await Admin.find({});

    // Respond with the list of admins
    res.status(200).json(admins);
  } catch (error) {
    console.error("Error fetching all admins:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const checkSuperAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: req.params.email });
    console.log(existingAdmin);
    if (existingAdmin.superUser) {
      res.status(200).json(true); // Admin exists
    } else {
      res.status(200).json(false);
    }
  } catch (error) {
    console.error("Error checking if admin exists:", error);
    throw new Error("Internal Server Error");
  }
};
