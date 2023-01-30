const Project = require("../models/Project.js");


const addProject = async (req, res, next) => {

  const { 
    title,
    image,
    projectDescription,    
    keyDetails,   
    priority,
    status,
    publishedDate,
    deadLine,
    attachedFiles,
    tags,
    teamLead,
    teamMember,
    authorisationMember,
    activities,
    commentsOnTheProject,
    correctionFromAuthorisationMember,
    createdBy, 
    createdAt, 
    lastUpdateBy, 
    lastUpdatedOn    
 } = req.body;

    let project;
    try{
        project = new Project({
        title,
        image,
        projectDescription,    
        keyDetails,   
        priority,
        status,
        publishedDate,
        deadLine,
        attachedFiles,
        tags,
        teamLead,
        teamMember,
        authorisationMember,
        activities,
        commentsOnTheProject,
        correctionFromAuthorisationMember,
        createdBy, 
        createdAt, 
        lastUpdateBy, 
        lastUpdatedOn
        });
        console.log(project);
        await project.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!project) {
        return res.status(500).json({ message: "Unable To Add" });
      }
      return res.status(201).json({ project });

}
 
const getAllProjects = async (req, res) => {
    let projects;
    try{
        projects = await Project.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!projects) {
        return res.status(404).json({ message: "No ProjectsgetAllProjects found" });
      }
      return res.status(200).json({ projects });
    };
    



const getById = async (req, res) => {
    let project;
    try{
        project = await Project.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!project) {
        return res.status(404).json({ message: "No Projects found" });
      }
      return res.status(200).json({ project });

}

const updateProject = async (req, res, next) => {
    const id = req.params.id;
    const { 
        title,
        image,
        projectDescription,    
        keyDetails,   
        priority,
        status,
        publishedDate,
        deadLine,
        attachedFiles,
        tags,
        teamLead,
        teamMember,
        authorisationMember,
        activities,
        commentsOnTheProject,
        correctionFromAuthorisationMember,
        createdBy, 
        createdAt, 
        lastUpdateBy, 
        lastUpdatedOn    
     } = req.body;  
    
    let project;
    try{
        project = await Project.findByIdAndUpdate(id,{
            title,
            image,
            projectDescription,    
            keyDetails,   
            priority,
            status,
            publishedDate,
            deadLine,
            attachedFiles,
            tags,
            teamLead,
            teamMember,
            authorisationMember,
            activities,
            commentsOnTheProject,
            correctionFromAuthorisationMember,
            createdBy, 
            createdAt, 
            lastUpdateBy, 
            lastUpdatedOn
        },{new:true},);
        
        console.log(project)
        project = await project.save()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!project) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
      }
      return res.status(200).json({ project });

}

const deleteProject = async (req, res) => {
    const id = req.params.id;
    let project;
    try{
        project = await Project.findByIdAndRemove(id);
    }

    catch (err) {
        console.log(err);
      }
    
      if (!project) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
      }
      return res.status(200).json({ message: "Project Successfully Deleted" });

}


exports.addProject = addProject;
exports.getAllProjects = getAllProjects;
exports.getById = getById;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;