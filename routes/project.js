const express = require("express");
const router = express.Router();
const Project = require("../models/Project.js");

router.post('/', async (req, res, next) => {

    const { 
        title,
        image,
        projectDescription,    
        keyDetails,   
        priority,
        status,
        publishedDate,
        deadLine,
        attachedFiles,
        tags,
        teamLead,
        teamMember,
        authorisationMember,
        activities,
        commentsOnTheProject,
        correctionFromAuthorisationMember
    
     } = req.body;

    const project = new Project({
        title,
        image,
        projectDescription,    
        keyDetails,   
        priority,
        status,
        publishedDate,
        deadLine,
        attachedFiles,
        tags,
        teamLead,
        teamMember,
        authorisationMember,
        activities,
        commentsOnTheProject,
        correctionFromAuthorisationMember
    });
    console.log(project)
    try{
        await project.save()
        res.status(200).json({ project });
    }
    catch(err){
        res.status(500).json({ message: "Unable To Add" });
    }

})

router.get('/', async (req, res) => {

    try{
        const project = await Project.find()
        res.status(200).json(project)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.get('/:id', async (req, res) => {

    try{
        const project = await Project.findById(req.params.id)
        res.status(200).json(project)
    }

    catch{
            res.status(404).json("not found")
    }

})

module.exports = router;