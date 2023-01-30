const express = require("express");
const router = express.Router();
const projectController = require("../controller/project controller.js");


router.post("/", projectController.addProject);
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getById);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;