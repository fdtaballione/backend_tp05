const express = require("express");
const validator = require("../utils/validator");
const { body } = require("express-validator");
const {
  getAutoController,
  getAutoByIdController,
  addAutoController,
  updateAutoController,
  deleteAutoController,
} = require("../controllers/autoController");
const { route } = require("../server/server");
const router = express.Router();

router.get("/auto", getAutoController);
router.get("/auto/:id", getAutoByIdController);

router.post(
  "/auto",
  body("modelo")
    .isLength({ min: 3, max: 15 })
    .withMessage("El atributo modelo debe poseer entre 3 y 15 caracteres"),
  body("marca")
    .isLength({ min: 3, max: 15 })
    .withMessage("El marca marca debe poseer entre 3 y 15 caracteres"),
  validator,
  addAutoController
);

router.put(
  "/auto/:id",
  body("modelo")
    .isLength({ min: 3, max: 15 })
    .withMessage("El atributo modelo debe poseer entre 3 y 15 caracteres"),
  body("marca")
    .isLength({ min: 3, max: 15 })
    .withMessage("El marca marca debe poseer entre 3 y 15 caracteres"),
  validator,
  updateAutoController
);

router.delete("/auto/:id", deleteAutoController);

module.exports = router;
