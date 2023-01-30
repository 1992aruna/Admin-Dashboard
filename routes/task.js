const express = require("express");
const router = express.Router();
const taskController = require("../controller/task controller.js");
const { protect, authorize } = require('../middleware/aauth.js');


router
  .route('/')
  .get(taskController.getAllTasks)
  .post(protect, authorize('superadmin'), taskController.addTask);

router
  .route('/:id')
  .get(taskController.getById)
  .put(protect, authorize('superadmin', 'statelevelhead', 'statelevelcoordinators', 'districtlevel', 'areahead', 'designers', 'postchecker'), taskController.updateTask)
  .delete(protect, authorize('superadmin'), taskController.deleteTask);
  

module.exports = router;