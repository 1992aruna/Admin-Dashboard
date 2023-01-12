const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");

router.post('/', async (req, res, next) => {

    const { taskName, description, taskStartDate, taskEndDate, addTeamMember, budget, status } = req.body;

    const task = new Task({
        taskName, 
        description, 
        taskStartDate, 
        taskEndDate, 
        addTeamMember, 
        budget, 
        status
    });
    console.log(task)
    try{
        await task.save()
        res.status(200).json({ task });
    }
    catch(err){
        res.status(500).json({ message: "Unable To Add" });
    }

})

router.get('/', async (req, res) => {

    try{
        const task = await Task.find()
        res.status(200).json(task)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.get('/:id', async (req, res) => {

    try{
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    }

    catch{
            res.status(404).json("not found")
    }

})

module.exports = router;