const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventsSchema = new Schema({
    eventName : {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    
    },

    eventCategory : {
        type : String,
        required : true
    },

    eventDate : {
        type : Date,
        required : true
    },

})


module.exports = mongoose.model('Events', eventsSchema);

