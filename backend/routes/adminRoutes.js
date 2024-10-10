import express from "express";

import {
  checkAdmin,
  addAdmin,
  deleteAdminByEmail,
  getAllAdmins,
  checkSuperAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

// GET whether the admin has delete/add privileges
router.get("/admin/:email", checkAdmin);

// update the version number
router.post("/admin", addAdmin);

router.delete("/admin/:email", deleteAdminByEmail);

router.get("/allAdmins", getAllAdmins);

router.get("/isSuperAdmin/:email", checkSuperAdmin);

export default router;
