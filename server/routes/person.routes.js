const express = require("express");
const router = express.Router();
const PersonController = require("../controllers/person.controller");

//for authentication
const { protect } = require("../middleware/authMiddleware.js");

router.get("/", PersonController.index);
router.post("/register", PersonController.registerUser);
router.post("/login", PersonController.loginUser);

module.exports = router;
