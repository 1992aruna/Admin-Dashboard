const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticketcontroller.js");
const { protect, authorize } = require('../middleware/aauth.js');

router
  .route('/')
  .get(ticketController.getAllTickets)
  .post(protect, authorize('superadmin'), ticketController.addTicket);
  
router
  .route('/:id')
  .get(ticketController.getById)
  .put(protect, authorize('superadmin'), ticketController.updateTicket)
  .delete(protect, authorize('superadmin'), ticketController.deleteTicket);

module.exports = router;