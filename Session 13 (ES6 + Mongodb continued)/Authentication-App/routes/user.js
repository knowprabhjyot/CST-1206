const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

// router.get("/", userController.getAllUsers)


// Registering
router.post("/register", userController.registerUser)

// // Login
router.post("/login", userController.loginUser)

// router.get("/:id", userController.getUserById)

// router.put("/:id", userController.updateUser)

// router.delete(":/id", userController.deletUser);

module.exports = router;