/* eslint-disable */

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import issueRoutes from "./routes/issueRoutes.js";
import { onRequest } from "firebase-functions/v2/https";

// import { CustomError, InternalError } from "./errors.js";

dotenv.config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (!err) return;
  if (!(err instanceof CustomError)) {
    // All unhandled errors are marked as unknown internal errors
    const e = InternalError.UNKNOWN.addContext(err.stack);
    res.status(e.statusCode).json({
      message: e.format(false),
      error: true,
    });
  } else if (err instanceof InternalError) {
    // Internal Error Logging
    console.error(err.format(false));
    res.status(err.statusCode).json({
      message: err.format(true),
      error: true,
    });
  } else {
    res.status(err.statusCode).json({
      message: err.format(true),
      error: true,
    });
  }
};

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/tier", tierRouter);
// app.use("/user", userRouter);
// app.use("/category", categoryRouter);
// app.use("/visualization", visRouter);
app.use("/api", issueRoutes);

app.use(errorHandler);

export const backend = onRequest({ region: "us-central1" }, app);

if (process.env.NODE_ENV === "development") {
  const port = process.env.DEV_PORT || 3001; // Default to 3000 if DEV_PORT is not set
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
