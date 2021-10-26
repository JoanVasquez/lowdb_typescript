import { body } from "express-validator";

export default [
  body("name").not().isEmpty().withMessage("Field Required"),
  body("description").not().isEmpty().withMessage("Field Required"),
];
