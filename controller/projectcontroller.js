const Project = require("../models/Project.js");


const addProject = async (req, res, next) => {

  const { 
    title,
    projectDescription ,
    sampleimage,
    dueDate1,
    dueDate2,
    compulsoryWordings,
    colors,
    leaderPhoto,
    status,
    //allotedFile,
    approvedStatus,
    createdBy,
    createdAt,
    lastUpdateBy,
    lastUpdatedOn    
 } = req.body;

    let project;
    try{
        project = new Project({
          title,
          projectDescription ,
          sampleimage,
          dueDate1,
          dueDate2,
          compulsoryWordings,
          colors,
          leaderPhoto,
          status,
          //allotedFile,
          approvedStatus,
          createdBy,
          createdAt,
          lastUpdateBy,
          lastUpdatedOn
        });
        req.body.user = req.user.id;
        await project.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!project && req.user.role !== 'superadmin') {
      return res.status(500).json({ message: "Unauthorized user Unable To Add Project" });
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
      projectDescription ,
      sampleimage,
      dueDate1,
      dueDate2,
      compulsoryWordings,
      colors,
      leaderPhoto,
      status,
      //allotedFile,
      approvedStatus,
      lastUpdateBy,
      lastUpdatedOn    
     } = req.body;  
    
    let project;
    try{
        project = await Project.findByIdAndUpdate(id,{
          title,
          projectDescription ,
          sampleimage,
          dueDate1,
          dueDate2,
          compulsoryWordings,
          colors,
          leaderPhoto,
          status,
          //allotedFile,
          approvedStatus,
          lastUpdateBy,
          lastUpdatedOn
        },{new:true},);
        req.body.user = req.user.id;
        console.log(project)
        project = await project.save()
        
    }
    catch (err) {
        console.log(err);
      }
    if (!project && req.user.role !== 'superadmin') {
      return res.status(500).json({ message: "Unauthorized user Unable To Update By this ID" });
    }
    return res.status(201).json({ project });

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
    
      if (!project && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Delete By this ID" });
      }
      return res.status(201).json({ message: "Project Successfully Deleted" });

}

const createAllotedFile = async (req, res, next) => {
  const id = req.params.id;
  const { 
      designerName,
      date,
      version1,
      comment,
      feedback,
      finalFile 
   } = req.body;  
  
  let allotedFile;
  try{
      allotedFile = await AllotedFile.findByIdAndUpdate(id,{
          designerName,
          date,
          version1,
          comment,
          feedback,
          finalFile  
      },{new:true},);
      req.body.user = req.user.id;
      console.log(allotedFile)
      allotedFile = await allotedFile.save()
      
  }
  catch (err) {
      console.log(err);
    }
  if (!allotedFile && req.user.role !== 'designer') {
    return res.status(500).json({ message: "Unauthorized user Unable To Create" });
  }
  return res.status(201).json({ allotedFile });

}

const getAllAllotedFiles = async (req, res) => {
  let allotedfiles;
  try{
    allotedfiles = await AllotedFile.find()
      
  }
  catch (err) {
      console.log(err);
    }
  
    if (!allotedfiles) {
      return res.status(404).json({ message: "No Alloted Files found" });
    }
    return res.status(200).json({ allotedfiles });
  };
  





exports.addProject = addProject;
exports.getAllProjects = getAllProjects;
exports.getById = getById;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
exports.createAllotedFile = createAllotedFile;
exports.getAllAllotedFiles = getAllAllotedFiles;