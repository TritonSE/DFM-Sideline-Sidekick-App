import express from "express";
import { Emergency, GeneralPrinciple } from "../models/issueModel.js";
import { validationResult } from "express-validator";

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

export { getAllEmergencies, getEmergencyById, getAllGeneralPrinciples, getGeneralPrincipleById };
