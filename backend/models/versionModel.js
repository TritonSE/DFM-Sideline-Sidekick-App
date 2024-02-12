import mongoose from "mongoose";

const versionSchema = new mongoose.Schema({
    version: Number
});

export const Version = mongoose.model("Version", versionSchema);