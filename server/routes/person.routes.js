const express = require("express");
const router = express.Router();
const PersonController = require("../controllers/person.controller");

router.get("/", PersonController.index);
router.post("/register", PersonController.registerUser);
router.post("/login", PersonController.loginUser);

module.exports = router;
