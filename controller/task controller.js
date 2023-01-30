const Task = require("../models/Task.js");


const addTask = async (req, res, next) => {

    const { 
    taskName, 
    description, 
    taskStartDate, 
    taskEndDate, 
    addTeamMember, 
    budget, 
    status,
    createdBy, 
    createdAt, 
    lastUpdateBy, 
    lastUpdatedOn,
           
 } = req.body;

    let task;
    try{
        task = new Task({
            taskName, 
            description, 
            taskStartDate, 
            taskEndDate, 
            addTeamMember, 
            budget, 
            status,
            createdBy, 
            createdAt, 
            lastUpdateBy, 
            lastUpdatedOn,
      
        });
        req.body.user = req.user.id;
        await task.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!task && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Add Task" });
      }
      return res.status(201).json({ task });

};
 
const getAllTasks = async (req, res) => {
    let tasks;
    try{
        tasks = await Task.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!tasks) {
        return res.status(404).json({ message: "No Tasks found" });
      }
      return res.status(200).json({ tasks });
    };
    



const getById = async (req, res) => {
    let task;
    try{
        task = await Task.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!task) {
        return res.status(404).json({ message: "No Task found" });
      }
      return res.status(200).json({ task });

}

const updateTask = async (req, res, next) => {
    const id = req.params.id;
    const { 
    taskName, 
    description, 
    taskStartDate, 
    taskEndDate, 
    addTeamMember, 
    budget, 
    status,
    createdBy, 
    createdAt, 
    lastUpdateBy, 
    lastUpdatedOn,
        
     } = req.body;  
    
    let task;
    try{
        task = await Task.findByIdAndUpdate(id,{
    taskName, 
    description, 
    taskStartDate, 
    taskEndDate, 
    addTeamMember, 
    budget, 
    status,
    createdBy, 
    createdAt, 
    lastUpdateBy, 
    lastUpdatedOn,
    
    },{new:true},);
    req.body.user = req.user.id;
        console.log(req.user)
        task = await task.save()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!task && req.user.role !== 'superadmin', 'statelevelhead', 'statelevelcoordinators', 'districtlevel', 'areahead', 'designers', 'postchecker') 
      {
        return res.status(500).json({ message: "Unauthorized user Unable To Update Task" });
      }
      return res.status(201).json({ task });

}

const deleteTask = async (req, res) => {
    const id = req.params.id;
    let task;
    try{
        task = await Task.findByIdAndRemove(id);
        req.body.user = req.user.id;
    }

    catch (err) {
        console.log(err);
      }
      
      if (!task && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Delete By this ID" });
      }
      return res.status(201).json({ message: "Task Successfully Deleted" });

}


exports.addTask = addTask;
exports.getAllTasks = getAllTasks;
exports.getById = getById;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;