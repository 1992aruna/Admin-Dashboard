const Invoice = require("../models/Invoice.js");


const addInvoice = async (req, res, next) => {

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
    paymentInfo,
    createdBy, 
    createdAt, 
    lastUpdateBy, 
    lastUpdatedOn    
 } = req.body;

    let invoice;
    try{
        invoice = new Invoice({
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
          paymentInfo,
          createdBy, 
          createdAt, 
          lastUpdateBy, 
          lastUpdatedOn
          });
        console.log(invoice);
        await invoice.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!invoice) {
        return res.status(500).json({ message: "Unable To Add" });
      }
      return res.status(201).json({ invoice });

}
 
const getAllInvoices = async (req, res) => {
    let invoices;
    try{
        invoices = await Invoice.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!invoices) {
        return res.status(404).json({ message: "No Invoices found" });
      }
      return res.status(200).json({ invoices });
    };
    



const getById = async (req, res) => {
    let invoice;
    try{
        invoice = await Invoice.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!invoice) {
        return res.status(404).json({ message: "No Invoices found" });
      }
      return res.status(200).json({ invoice });

}

const updateInvoice = async (req, res, next) => {
    const id = req.params.id;
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
      paymentInfo,
      createdBy, 
      createdAt, 
      lastUpdateBy, 
      lastUpdatedOn    
   } = req.body;   
    let invoice;
    
    try{
        invoice = await Invoice.findByIdAndUpdate(id,{
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
          paymentInfo,
          createdBy, 
          createdAt, 
          lastUpdateBy, 
          lastUpdatedOn
        },{new:true},);
        
        console.log(invoice)
        invoice = await invoice.save()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!invoice) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
      }
      return res.status(200).json({ invoice });

}

const deleteInvoice = async (req, res) => {
    const id = req.params.id;
    let invoice;
    try{
        invoice = await Invoice.findByIdAndRemove(id);
    }

    catch (err) {
        console.log(err);
      }
    
      if (!invoice) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
      }
      return res.status(200).json({ message: "Invoice Successfully Deleted" });

}


exports.addInvoice = addInvoice;
exports.getAllInvoices = getAllInvoices;
exports.getById = getById;
exports.updateInvoice = updateInvoice;
exports.deleteInvoice = deleteInvoice;