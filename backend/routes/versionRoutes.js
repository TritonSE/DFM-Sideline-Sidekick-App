import express from "express";

import {
    updatedVersion,
    getVersion,
    getAllWithVersion
} from "../controllers/versionController.js";

const router = express.Router();

// GET the version of the database
router.get("/version", getVersion);

// update the version number
router.put("/version", updatedVersion);

// get all data AND the version
router.get("/allWithVersion", getAllWithVersion);

export default router;
