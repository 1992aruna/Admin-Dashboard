const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

router.post('/', async (req, res, next) => {

    const { name, email, password, role } = req.body;

    const user = new User({
        name, email, password, role
    });
    console.log(user)
    try{
        await user.save()
        sendTokenResponse(user, 200, res);
    }
    catch(err){
        res.status(500).json({ message: "Unable To Register" });
    }

})

router.get('/', async (req, res) => {

    try{
        const user = await User.find()
        res.status(200).json(user)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.get('/:id', async (req, res) => {

    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.put('/:id', async (req, res) => {

    try{
        const user = await User.findByIdAndUpdate(req.params.id, { 
            new: true,
            runValidators: true
        })
        
        res.status(200).json(user)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.delete('/:id', async (req, res) => {

    try{
        const user = await User.findByIdAndDelete(req.params.id, { 
            new: true,
            runValidators: true
        })
        
        res.status(200).json(user)
    }

    catch{
            res.status(404).json("not found")
    }

})

const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
    };
  
      
    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({
        success: true,
        token
      });
    }
module.exports = router;