const express = require("express");
const router = express.Router();
const colorController = require("../controllers/color.controllers");

router.post("/color", colorController.createColor);
router.get("/color", colorController.getColors);
router.get("/color/:id", colorController.getColorById);
router.delete("/color/:id", colorController.deleteColorById);
router.patch("/color/:id", colorController.updateColorById);

module.exports = router;
