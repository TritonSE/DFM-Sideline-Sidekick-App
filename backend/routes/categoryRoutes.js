import express from "express";

import {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategoryById,
  addTitleToCategoryById,
} from "../controllers/categoryController.js";
import { handleValidationErrors, validateCategory } from "../validators/categoryValidator.js";

const router = express.Router();

// GET all categories
router.get("/categories", getAllCategories);

// GET specific category by ID
router.get("/categories/:id", getCategoryById);

// POST category
router.post("/categories", validateCategory, handleValidationErrors, createCategory);

// DELETE specific category by ID
router.delete("/categories/:id", deleteCategoryById);

// PUT new title to category ITEMS
router.put("/categories/:id", addTitleToCategoryById);

export default router;
