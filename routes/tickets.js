const express = require("express");
const router = express.Router();
const Tickets = require("../models/Tickets.js");

router.post('/', async (req, res, next) => {

    const { ticket, client, topic, assignedTo, status, priority, createdAt, dueDate, lastActivity } = req.body;

    const tickets = new Tickets({
        ticket, 
        client, 
        topic, 
        assignedTo, 
        status, 
        priority, 
        createdAt, 
        dueDate, 
        lastActivity
    });
    console.log(tickets)
    try{
        await tickets.save()
        res.status(200).json({ tickets });
    }
    catch(err){
        res.status(500).json({ message: "Unable To Add" });
    }

})

router.get('/', async (req, res) => {

    try{
        const tickets = await Tickets.find()
        res.status(200).json(tickets)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.get('/:id', async (req, res) => {

    try{
        const tickets = await Tickets.findById(req.params.id)
        res.status(200).json(tickets)
    }

    catch{
            res.status(404).json("not found")
    }

})

module.exports = router;