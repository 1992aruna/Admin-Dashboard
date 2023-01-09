const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ticketsSchema = new Schema({
    ticket : {
        type : String,
        required : true
    },

    client : {
        type : String,
        req
    },

    city : {
        type : String,
        required : true
    },

    state:{
        type: String,
        required : true
    },

    country:{
        type: String,
        required : true
    },

    noofstudents:{
        type: Number,
        required : true
    },
   
    courselist : [{
        type:String,
    }]
})



module.exports = mongoose.model('Tickets', ticketsSchema);
