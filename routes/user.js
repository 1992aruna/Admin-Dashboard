const express = require("express");
const router = express.Router();
const userController = require("../controller/usercontroller.js");


router.post("/", userController.addUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;