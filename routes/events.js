const express = require("express");
const router = express.Router();
const eventController = require("../controller/event controller.js");


router.post("/", eventController.addEvent);
router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getById);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;