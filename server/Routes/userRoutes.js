const express = require("express");

const userController = require("./../controllers/userController");
const router = express.Router();
router.get("/signup", userController.getSignUp);

module.exports.router = router;
