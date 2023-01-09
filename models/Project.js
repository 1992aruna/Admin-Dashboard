const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true
    },

    projectdescription : {
        type : String,
        required : true
    },

    keydetails : {
        img : {
        type: String,
        data : buffer
    }
        
    },

    priority : {
        type: String,
        required : true
    },

    status : {
        type: String,
        required : true
    },
    publisheddate : {
        type : Date,
        required : true
    },
    deadline : {
        type : Date,
        required : true
    },
    attachedfiles : {
        type: Number,
        required : true
    },
    tags: {
        categories : {
            type: String,
            required : true
        },
        skills : {
            type: String,
            required : true
        }
        
    },
    teamlead: {
        type: String,
        required : true
    },
    teammember: {
        type: String,
        required : true
    },
    authorisationmember: {
        type: String,
        required : true
    },
    activities: {
        type: Number,
        required : true
    },
    commentsontheproject: {
        type: String,
        required : true
    },
     
    correctionfromauthorisationmember : {
        type:String,
        required : true
    }
})


module.exports = mongoose.model('Project', projectSchema);
