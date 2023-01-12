const express = require("express");
const router = express.Router();
const Events = require("../models/Events.js");
const moment = require("moment");

router.post('/', async (req, res, next) => {

    const { eventName, eventCategory, eventDate } = req.body;

    const events = new Events({
        eventName, eventCategory, eventDate
    });
    console.log(events)
    try{
        await events.save()
        res.status(200).json({ events });
    }
    catch(err){
        res.status(500).json({ message: "Unable To Add" });
    }

})
 
router.get('/', async (req, res) => {

    try{
        const events = await Events.find({
            start: { $gte: moment(req.start).toDate() },
        })
        res.status(200).json(events)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.get('/:id', async (req, res) => {

    try{
        const events = await Events.findById(req.params.id)
        res.status(200).json(events)
    }

    catch{
            res.status(404).json("not found")
    }

})

module.exports = router;