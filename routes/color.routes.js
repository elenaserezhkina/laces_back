const express = require("express");
const router = express.Router();
const colorController = require("../controllers/color.controllers");

router.post("/", colorController.createColor);
router.get("/", colorController.getColors);
router.get("/:id", colorController.getColorById);
router.delete("/:id", colorController.deleteColorById);
router.patch("/:id", colorController.updateColorById);

module.exports = router;
