import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  title: String,
  superUser: Boolean,
});

export const Admin = mongoose.model("Admin", adminSchema);
