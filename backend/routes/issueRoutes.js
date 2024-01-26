import express from "express";
import { Emergency, GeneralPrinciple } from "../models/issueModel.js";
import { createEmergency, createGeneralPrinciple } from "../controllers/issueController.js";

import {
  validateEmergencyData,
  validateGeneralPrincipleData,
  handleValidationErrors,
} from "../validators/issueValidator.js";
import {
  getAllEmergencies,
  getEmergencyById,
  getAllGeneralPrinciples,
  getGeneralPrincipleById,
  deleteEmergencyById,
  deleteGeneralPrincipleById,
  updatedEmergencyById,
  updatedGeneralPrincipleById
} from "../controllers/issueController.js";

const router = express.Router();

// GET all emergencies
router.get("/emergencies", getAllEmergencies);

// GET a specific emergency by ID
router.get("/emergencies/:id", getEmergencyById);

// POST an emergency (with validation)
router.post("/emergencies", validateEmergencyData, handleValidationErrors, createEmergency);

// GET all general principles
router.get("/generalPrinciples", getAllGeneralPrinciples);

// GET a specific general principle by ID
router.get("/generalPrinciples/:id", getGeneralPrincipleById);

// POST a general principle (with validation)
router.post(
  "/generalPrinciples",
  validateGeneralPrincipleData,
  handleValidationErrors,
  createGeneralPrinciple,
);

// DELETE a specific emergency by ID
router.delete(
  "/emergencies/:id",
  deleteEmergencyById
);

// DELETE a specific general principle by ID
router.delete(
  "/generalPrinciples/:id",
  deleteGeneralPrincipleById
);

// PUT a specific emergency by ID
router.put(
  "/emergencies/:id",
  updatedEmergencyById
)

// PUT a specific general principle by ID
router.put(
  "/generalPrinciples/:id",
  updatedGeneralPrincipleById
)

// Add more routes as needed (e.g., PUT, DELETE)
export default router;
