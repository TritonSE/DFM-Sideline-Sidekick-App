import express from "express";
import { validationResult } from "express-validator";

import { Emergency, GeneralPrinciple } from "../models/issueModel.js";
import { updatedVersion } from "./versionController.js";

// Get all emergencies and general principles
const getAll = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    const generalPrinciples = await GeneralPrinciple.find();
    res.json({ emergencies, generalPrinciples });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all emergencies
const getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific emergency by ID
const getEmergencyById = async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: "Emergency not found" });
    }
    res.json(emergency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all general principles
const getAllGeneralPrinciples = async (req, res) => {
  try {
    const generalPrinciples = await GeneralPrinciple.find();
    res.json(generalPrinciples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific general principle by ID
const getGeneralPrincipleById = async (req, res) => {
  try {
    const generalPrinciple = await GeneralPrinciple.findById(req.params.id);
    if (!generalPrinciple) {
      return res.status(404).json({ message: "General Principle not found" });
    }
    res.json(generalPrinciple);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEmergency = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract data from the request body
    const { title, overview, treatment, content } = req.body;

    // Create a new Emergency instance
    const newEmergency = new Emergency({
      title,
      overview,
      treatment,
      content,
    });

    // Save the new emergency to the database
    const savedEmergency = await newEmergency.save();

    // Respond with the saved emergency data
    res.status(201).json(savedEmergency);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createGeneralPrinciple = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract data from the request body
    const { title, overview, content } = req.body;

    // Create a new GeneralPrinciple instance
    const newGeneralPrinciple = new GeneralPrinciple({
      title,
      overview,
      content,
    });

    // Save the new general principle to the database
    const savedGeneralPrinciple = await newGeneralPrinciple.save();

    // Respond with the saved general principle data
    res.status(201).json(savedGeneralPrinciple);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete an emergency by ID
export const deleteEmergencyById = async (req, res) => {
  try {
    const deletedEmergency = await Emergency.findByIdAndDelete(req.params.id);
    if (!deletedEmergency) {
      return res.status(404).json({ message: "Emergency not found" });
    }

    // Respond with success and the doc deleted
    res.status(200).json({ sucesss: true, "deleted document": deletedEmergency });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a general principle by ID
export const deleteGeneralPrincipleById = async (req, res) => {
  try {
    const deletedPrinciple = await GeneralPrinciple.findByIdAndDelete(req.params.id);
    if (!deletedPrinciple) {
      return res.status(404).json({ message: "General principle not found" });
    }

    // Respond with success and the doc deleted
    res.status(200).json({ sucesss: true, "deleted document": deletedPrinciple });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an emergency by id
export const updatedEmergencyById = async (req, res) => {
  try {
    // filter to find emergency by id
    const filter = { _id: req.params.id };
    // update changed to found emergency
    const update = req.body;

    const updatedEmergency = await Emergency.findOneAndUpdate(filter, update, {
      new: true, // returns the updated emergency
      // includeResultMetadata: true (uncomment for metadata information)
    });
    if (!updatedEmergency) {
      res.status(404).json({ message: "Emergency not found" });
    }

    // Respond with the updated emergency data
    res.status(200).json(updatedEmergency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an general principle by id
export const updatedGeneralPrincipleById = async (req, res) => {
  try {
    // filter to find emergency by id
    const filter = { _id: req.params.id };
    // update changed to found emergency
    const update = req.body;

    const updatedPrinciple = await GeneralPrinciple.findOneAndUpdate(filter, update, {
      new: true, // returns the updated emergency
      // includeResultMetadata: true (uncomment for metadata information)
    });
    if (!updatedPrinciple) {
      res.status(404).json({ message: "General principle not found" });
    }

    // Respond with the updated general principle data
    res.status(200).json(updatedPrinciple);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAll,
  getAllEmergencies,
  getEmergencyById,
  getAllGeneralPrinciples,
  getGeneralPrincipleById,
};
