const express = require("express");
const router = express.Router();
const shoeController = require("../controllers/laces.controllers");

router.post("/", shoeController.createShoe);
router.get("/", shoeController.getShoes);
router.get("/:id", shoeController.getShoeById);
router.delete("/:id", shoeController.deleteShoe);
router.patch("/:id", shoeController.updateShoe);

module.exports = router;
