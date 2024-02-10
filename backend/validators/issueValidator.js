// issueValidator.js
import { body, validationResult } from "express-validator";

const validateEmergencyData = [
  body("title").notEmpty().isString(),
  // Add validation rules for overview, treatment, and content as needed
];

const validateGeneralPrincipleData = [
  body("title").notEmpty().isString(),
  // Add validation rules for overview, and content as needed
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateEmergencyData, validateGeneralPrincipleData, handleValidationErrors };
