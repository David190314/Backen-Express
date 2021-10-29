const { getAllTasks,getTaskById, addTasks, deleteTaskByID, updateTasksById} = require('../services/tasks.services');
const { v4: uuidv4 } = require('uuid');

const getTasksCtrl = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};


const getTasksById = async (req, res)=>{
  let peticion = parseInt(req.params.id)
  try {
    const task = await getTaskById(peticion)
    res.json(task)
  } catch (error) {
    
  }
}

const addTask = async (req, res) =>{
  try {
    
    task ={
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      estado: req.body.estado
    }
    const array = await addTasks(task)
    res.status(21).json(array)
    return array
    
  } catch (error) {
    return error
  }
    
}

const deleteTaskCtrl = async (req, res)=>{
  try {
    const peticion = req.params.id
    const tasks = await getTaskById(peticion)
    if(tasks === undefined){
      res.json({mesagge: "la tarea no existe"})
    }else if (tasks != undefined){
      res.json({mesagge:"se ha eliminado la tarea"})
      deleteTaskByID(tasks)
    }
  } catch (error) {
    
  }
}

const updateTasksCtrl = async(req, res)=>{
  const {id} = req.params
  try {
    const task = req.body
    const tasks = await getTaskById(id)
    console.log(tasks)
    await tasks === undefined ? res.json({mesagge: "la tarea no existe"}):res.json(tasks),updateTasksById(id,task)
  } catch (error) {
    
  }
}



module.exports = {
  getTasksCtrl,
  getTasksById,
  addTask,
  deleteTaskCtrl,
  updateTasksCtrl
};
