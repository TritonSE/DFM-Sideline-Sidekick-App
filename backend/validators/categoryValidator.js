// categoryValidator.js
import { body, validationResult } from "express-validator";

const validateCategory = [
  body("title").notEmpty().isString(),

  body("type").custom((value) => {
    if (value !== "Emergency" && value !== "General Principle") {
      throw new Error("Type must be either 'Emergency' or 'General Principle'");
    }
    return true;
  }),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateCategory, handleValidationErrors };
