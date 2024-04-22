import { Category } from "../models/categoryModel.js";
import { validationResult } from "express-validator";

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a category
export const createCategory = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Extract data from the request body
    const { title, items, type } = req.body;

    // Create a new Category instance
    const newCategory = new Category({
      title,
      items,
      type,
    });

    // Save the new category to the database
    const savedCategory = await newCategory.save();

    // Respond with the saved category data
    res.status(201).json(newCategory);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a category by ID
export const deleteCategoryById = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Respond with success and the doc deleted
    res.status(200).json({ sucesss: true, "Deleted category": deletedCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add title a category by ID
export const addTitleToCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id; // Get the category ID from request parameters
    const newTitle = req.body.title; // Get the new title from request body

    // Find the category by ID
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Add the new title to the category's items array
    category.items.push(newTitle);

    // Save the updated category to the database
    const updatedCategory = await category.save();

    // Respond with the updated category data
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete title from a category by ID and TITLE
export const deleteTitleToCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id; // Get the category ID from request parameters
    const deletedTitle = req.params.title; // Get the title to be deleted from request body

    // Find the category by ID
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Delete title to the category's items array
    const index = category.items.indexOf(deletedTitle)
    console.log("hihi");

    if (index > -1) {
      category.items.splice(index, 1);

      // Save the updated category to the database
      const updatedCategory = await category.save();

      // Respond with the updated category data
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: "Title not found" });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};