const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

//---- PATCH /user/reset-password ---->
router.patch("/reset-password", userController.resetPassword);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.put("/", userController.updateUser);

module.exports = router;
