const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice.js");

router.post('/', async (req, res, next) => {

    const { 
        addressInfo,
        invoiceNo,
        date,
        paymentStatus,
        totalAmount,
        billingAddress,
        shippingAddress,
        productDetails,   
        subTotal,
        estimatedTax,
        discount,
        shippingCharge,
        total,
        paymentInfo    
     } = req.body;

    const invoice = new Invoice({
        addressInfo,
        invoiceNo,
        date,
        paymentStatus,
        totalAmount,
        billingAddress,
        shippingAddress,
        productDetails,   
        subTotal,
        estimatedTax,
        discount,
        shippingCharge,
        total,
        paymentInfo
    });
    console.log(invoice)
    try{
        await invoice.save()
        res.status(200).json({ invoice });
    }
    catch(err){
        res.status(500).json({ message: "Unable To Add" });
    }

})

router.get('/', async (req, res) => {

    try{
        const invoice = await Invoice.find()
        res.status(200).json(invoice)
    }

    catch{
            res.status(404).json("not found")
    }

})

router.get('/:id', async (req, res) => {

    try{
        const invoice = await Invoice.findById(req.params.id)
        res.status(200).json(invoice)
    }

    catch{
            res.status(404).json("not found")
    }

})

module.exports = router;