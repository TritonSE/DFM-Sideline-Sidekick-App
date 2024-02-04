import mongoose from "mongoose";

const medicalEmergencySchema = new mongoose.Schema({
  title: String,
  overview: {},
  treatment: {},
  content: {},
});

const generalPrincipleSchema = new mongoose.Schema({
  title: String,
  overview: {},
  content: {},
});

const Emergency = mongoose.model("Emergency", medicalEmergencySchema);
const GeneralPrinciple = mongoose.model("GeneralPrinciple", generalPrincipleSchema);

export { Emergency, GeneralPrinciple };
