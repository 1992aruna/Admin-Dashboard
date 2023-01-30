const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticket controller.js");


router.post("/", ticketController.addTicket);
router.get("/", ticketController.getAllTickets);
router.get("/:id", ticketController.getById);
router.put("/:id", ticketController.updateTicket);
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;