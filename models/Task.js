const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    taskName : {
        type : String,
        required : true
    },

    description : {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },

    taskStartDate : {
        type : Date,
        required : true
    },

    taskEndDate : {
        type : Date,
        required : true
    },

    addTeamMember : {
        type: String,
        required : true
    },

    budget : {
        type: String,
        required : true
    },
    status : {
        type: String,
        required : true
    }
})



module.exports = mongoose.model('Task', taskSchema);
