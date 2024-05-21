import mongoose from "mongoose";

const medicalEmergencySchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overview: {},
  treatment: {},
});

const generalPrincipleSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: {},
});

const Emergency = mongoose.model("Emergency", medicalEmergencySchema);
const GeneralPrinciple = mongoose.model("GeneralPrinciple", generalPrincipleSchema);

export { Emergency, GeneralPrinciple };
