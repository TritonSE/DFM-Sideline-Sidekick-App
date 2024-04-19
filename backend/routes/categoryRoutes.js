import express from "express";

import {
    createCategory,
    addTitleToCategoryById,
    deleteCategoryById,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/categories", createCategory);

router.delete("/categories/:id", deleteCategoryById);

router.put("/categories/:id", addTitleToCategoryById);

export default router;
