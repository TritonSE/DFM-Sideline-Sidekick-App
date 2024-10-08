import express from "express";

import {
  createEmergency,
  createGeneralPrinciple,
  deleteEmergencyByTitle,
  deleteGeneralPrincipleByTitle,
  getAll,
  getAllEmergencies,
  getAllGeneralPrinciples,
  getEmergencyByTitle,
  getGeneralPrincipleByTitle,
  updatedEmergencyById,
  updatedGeneralPrincipleById,
} from "../controllers/issueController.js";
import { Emergency, GeneralPrinciple } from "../models/issueModel.js";
import {
  handleValidationErrors,
  validateEmergencyData,
  validateGeneralPrincipleData,
} from "../validators/issueValidator.js";

const router = express.Router();

//GET all emergencies and general principles
router.get("/all", getAll);

// GET all emergencies
router.get("/emergencies", getAllEmergencies);

// GET a specific emergency by name
router.get("/emergencies/:title", getEmergencyByTitle);

// POST an emergency (with validation)
router.post("/emergencies", validateEmergencyData, handleValidationErrors, createEmergency);

// GET all general principles
router.get("/generalPrinciples", getAllGeneralPrinciples);

// GET a specific general principle by ID
router.get("/generalPrinciples/:title", getGeneralPrincipleByTitle);

// POST a general principle (with validation)
router.post(
  "/generalPrinciples",
  validateGeneralPrincipleData,
  handleValidationErrors,
  createGeneralPrinciple,
);

// DELETE a specific emergency by ID
router.delete("/emergencies/:title", deleteEmergencyByTitle);

// DELETE a specific general principle by ID
router.delete("/generalPrinciples/:title", deleteGeneralPrincipleByTitle);

// PUT a specific emergency by ID
router.put("/emergencies/:id", updatedEmergencyById);

// PUT a specific general principle by ID
router.put("/generalPrinciples/:id", updatedGeneralPrincipleById);

// Add more routes as needed
export default router;
