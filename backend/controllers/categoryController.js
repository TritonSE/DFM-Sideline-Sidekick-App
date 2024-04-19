import { Category } from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
    try {
        // Extract data from the request body
        const { title, items, type } = req.body;

        // Create a new Emergency instance
        const newCategory = new Category({
            title,
            items,
            type,
        });

        // Save the new emergency to the database
        const savedCategory = await newCategory.save();

        // Respond with the saved emergency data
        res.status(201).json(newCategory);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};