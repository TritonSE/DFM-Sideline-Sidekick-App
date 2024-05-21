import { Version } from "../models/versionModel.js";
import { Emergency, GeneralPrinciple } from "../models/issueModel.js";
import { Category } from "../models/categoryModel.js";

export const getVersion = async (req, res) => {
  try {
    const version = await Version.find();
    res.json(version);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatedVersion = async (req, res) => {
  try {
    // update changed to found emergency
    const update = { $inc: { version: 1 } };

    const updatedVersion = await Version.findOneAndUpdate({}, update, {
      new: true, // returns the updated emergency
      // includeResultMetadata: true (uncomment for metadata information)
    });
    if (!updatedVersion) {
      res.status(404).json({ message: "Version not found" });
    }

    // Respond with the updated version data
    res.status(200).json(updatedVersion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get ALL with version
export const getAllWithVersion = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    const generalPrinciples = await GeneralPrinciple.find();
    const categories = await Category.find();
    const version = await Version.find();
    res.json({ version, emergencies, generalPrinciples, categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
