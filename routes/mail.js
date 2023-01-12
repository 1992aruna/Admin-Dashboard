const express = require("express");
const router = express.Router();
const mail = require("./Mail.js");

router.post('/', async (req, res, next) => {

    const { subject, email, text } = req.body;

    const mail = new Mail({
        subject, email, text
    });
    console.log(mail)
    try{
        await mail.save()
        res.status(200).json({ mail });
    }
    catch(err){
        res.status(500).json({ message: "Unable To Add" });
    }

})



router.get('/', async (req, res) => {

    try{
        const mail = await Mail.find()
        res.status(200).json(mail)
    }

    catch{
            res.status(404).json("not found")
    }

})



module.exports = router;