const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ticketsSchema = new Schema({
    ticket : {
        type : String,
        required : true
    },

    client : {
        type : String,
        required : true
    },

    topic : {
        type : String,
        required : true
    },

    assignedTo :{
        type: String,
        required : true
    },

    status :{
        type: String,
        required : true
    },

    priority :{
        type: String,
        required : true
    },
   
    createdAt : {
        type: Date,
        default: Date.now
      },
    dueDate : {
        type: Date,
        require: true
      },
    lastActivity : {
        type: String,
        required : true
    }
})



module.exports = mongoose.model('Tickets', ticketsSchema);
