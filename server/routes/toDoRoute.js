const express = require("express");
const router = express.Router();
const toDoController = require("../controllers/toDoController.js");

router.get("/", toDoController.read);
router.post("/", toDoController.create);
router.patch("/:id", toDoController.update);
router.delete("/:id", toDoController.delete);
module.exports = router;
