const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventsSchema = new Schema({
    eventname : {
        type : String,
        required : true
    
    },

    eventcategory : {
        type : String,
        required : true
    },

    eventdate : {
        type : Date,
        required : true
    },

})


module.exports = mongoose.model('Events', eventsSchema);

