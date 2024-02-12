import { Version } from "../models/versionModel.js";
import { Emergency, GeneralPrinciple } from "../models/issueModel.js";

export const getVersion = async (req, res) => {
    try {
        const version = await Version.find();
        res.json(version);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

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
        const version = await Version.find();
        res.json({ version, emergencies, generalPrinciples });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// just to create a version schema [we only need one so i commented this out]

// export const createVersion = async (req, res) => {

//     try {
//         const { version } = req.body;

//         const newVersion = new Version({
//             version
//         });

//         const savedVersion = await newVersion.save();
//         res.status(201).json(savedVersion);
//     } catch (error) {
//         // Handle any errors that occur during the process
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };


