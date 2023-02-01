const Tiket = require("../models/Ticket.js");


const addTicket = async (req, res, next) => {

  const { 
        ticket, 
        client, 
        topic, 
        assignedTo, 
        status, 
        priority, 
        dueDate, 
        lastActivity,
        createdBy, 
        createdAt, 
        lastUpdateBy, 
        lastUpdatedOn, 
        description
        
 } = req.body;

    let tiket;
    try{
        tiket = new Tiket({
        ticket, 
        client, 
        topic, 
        assignedTo, 
        status, 
        priority, 
        dueDate, 
        lastActivity,
        createdBy, 
        createdAt, 
        lastUpdateBy, 
        lastUpdatedOn, 
        description
        });

        req.body.user = req.user.id;
        console.log(tiket);
        await tiket.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!tiket && req.user.role !== 'superadmin') {
      return res.status(500).json({ message: "Unauthorized user Unable To Add Ticket" });
    }
    return res.status(201).json({ tiket });

}
 
const getAllTickets = async (req, res) => {
    let tikets;
    try{
        tikets = await Tiket.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!tikets) {
        return res.status(404).json({ message: "No Tikets found" });
      }
      return res.status(200).json({ tikets });
    };
    



const getById = async (req, res) => {
    let tiket;
    try{
        tiket = await Tiket.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!tiket) {
        return res.status(404).json({ message: "No Tiket found" });
      }
      return res.status(200).json({ tiket });

}

const updateTicket = async (req, res, next) => {
    const id = req.params.id;
    const { 
        ticket, 
        client, 
        topic, 
        assignedTo, 
        status, 
        priority, 
        dueDate, 
        lastActivity,
        lastUpdateBy, 
        lastUpdatedOn, 
        description
        
     } = req.body;  
    
    let tiket;
    try{
        tiket = await Tiket.findByIdAndUpdate(id,{
            ticket, 
            client, 
            topic, 
            assignedTo, 
            status, 
            priority, 
            dueDate, 
            lastActivity,
            lastUpdateBy, 
            lastUpdatedOn, 
            description
    
    },{new:true},);
        
        req.body.user = req.user.id;
        console.log(tiket)
        tiket = await tiket.save()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!tiket && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Update By this" });
      }
      return res.status(201).json({ tiket });
}

const deleteTicket = async (req, res) => {
    const id = req.params.id;
    let tiket;
    try{
        tiket = await Tiket.findByIdAndRemove(id);
        req.body.user = req.user.id;
    }

    catch (err) {
        console.log(err);
      }
      if (!tiket && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Delete By this ID" });
      }
      return res.status(201).json({ message: "Ticket Successfully Deleted" });
      

}


exports.addTicket = addTicket;
exports.getAllTickets = getAllTickets;
exports.getById = getById;
exports.updateTicket = updateTicket;
exports.deleteTicket = deleteTicket;