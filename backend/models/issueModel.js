import mongoose from "mongoose";

const medicalEmergencySchema = new mongoose.Schema(
  {
    title: String,
    overview: {},
    treatment: {},
    content: {},
  },
  {
    methods: {
      getName() {
        return this.title;
      },
    },
  },
);

const generalPrincipleSchema = new mongoose.Schema(
  {
    title: String,
    overview: {},
    content: {},
  },
  {
    methods: {
      getName() {
        return this.title;
      },
    },
  },
);

const Emergency = mongoose.model("Emergency", medicalEmergencySchema);
const GeneralPrinciple = mongoose.model("GeneralPrinciple", generalPrincipleSchema);

export { Emergency, GeneralPrinciple };
