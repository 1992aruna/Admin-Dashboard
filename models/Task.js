const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    taskname : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    taskstartdate : {
        type : Date,
        required : true
    },

    taskenddate : {
        type : Date,
        required : true
    },

    addteammember : {
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
