const express = require("express");
const router = express.Router();
const UserController = require("../controller/usersController");

router.get("/users", UserController.getAllUsers);
router.put("/update/:id", UserController.updateUser);
router.post("/add", UserController.addUser);
router.get("/user/:id", UserController.getUserById);

module.exports = router;
