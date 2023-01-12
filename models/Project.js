const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    image : {
        type : String,
        default: 'no-image.jpg'
    },
    
    projectDescription : {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },

    keyDetails : {
        img : {
        type: String,
        required : true
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
    publishedDate : {
        type : Date,
        required : true
    },
    deadLine : {
        type : Date,
        required : true
    },
    attachedFiles : {
        type: Number,
        required : true
    },
    tags: {
        category : {
            type: String,
            required : true
        },
        skills : {
            type: String,
            required : true
        }
        
    },
    teamLead: {
        type: String,
        required : true
    },
    teamMember: {
        type: String,
        required : true
    },
    authorisationMember: {
        type: String,
        required : true
    },
    activities: {
        type: String,
        required : true
    },
    commentsOnTheProject: {
        type: String,
        required : true
    },
     
    correctionFromAuthorisationMember : {
        type:String,
        required : true
    }
})


module.exports = mongoose.model('Project', projectSchema);
