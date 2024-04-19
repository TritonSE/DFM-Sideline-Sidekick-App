import { Category } from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
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
