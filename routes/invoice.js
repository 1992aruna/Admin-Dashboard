const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoicecontroller.js");


router.post("/", invoiceController.addInvoice);
router.get("/", invoiceController.getAllInvoices);
router.get("/:id", invoiceController.getById);
router.put("/:id", invoiceController.updateInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

module.exports = router;