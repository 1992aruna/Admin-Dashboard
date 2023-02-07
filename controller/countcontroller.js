const Event = require("../models/Events.js");
const Project = require("../models/Project.js");
const Task = require("../models/Task.js");

const data_count = async(req, res) => {
    try{
        const count_data = [];
        const event_data = await Event.find().count();
        const project_data = await Project.find().count();
        const task_data = await Task.find().count();

        count_data.push({
            event:event_data,
            project:project_data,
            task:task_data
        });
    
        res.status(200).send({sucess: true, msg:"Counting Data", data:count_data});
    }
    catch(error){
        res.status(400).send({sucess: false, msg:error.message});
    }
}

exports.data_count = data_count;