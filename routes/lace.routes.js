const express = require("express");
const router = express.Router();
const laceController = require("../controllers/lace.controllers");

router.post("/", laceController.createLace);
router.get("/", laceController.getLaces);
router.get("/:id", laceController.getLaceById);
router.delete("/:id", laceController.deleteLace);
router.patch("/:id", laceController.updateLace);

module.exports = router;
