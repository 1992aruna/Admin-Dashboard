const express = require("express");
const router = express.Router();
const countController = require("../controller/countcontroller.js");
//const { protect, authorize } = require('../middleware/aauth.js');

router
  .route('/')
  .get(countController.data_count)
  
module.exports = router;