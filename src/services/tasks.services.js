const fs = require('fs/promises');
const path = require('path');



const TASK_PATH = path.resolve(__dirname, '..', 'tasks.json');


const writeTasks = async (todolist) =>{
  try {
      await fs.writeFile(TASK_PATH,JSON.stringify(todolist))
  } catch (error) {
    throw error
  }
}

const getAllTasks = async () => {
  try {
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
    console.log(error);
  }
};

const getTaskById = async (idTasks) => {
  try {
    const tasks = await getAllTasks()
    const datos = tasks.find((e)=>e.id === idTasks)
    return datos
    
  } catch (error) {
    return error
  }
  
};

const addTasks = async(task) =>{
  try {
    const tasksArray = await getAllTasks()
    tasks={
      ...task
    }
    tasksArray.push(task);
    await fs.writeFile(TASK_PATH,JSON.stringify(tasksArray))
  } catch (error) {
    console.log(error)
  }
  
}

const deleteTaskByID = async(task)=>{
  const arrayTask = task.id
  try {
    const tasksArray = await getAllTasks()
    datos = tasksArray.filter((e)=> e.id != arrayTask)
    await fs.writeFile(TASK_PATH,JSON.stringify(datos))
    
  } catch (error) {
    
  }

}
const updateTasksById = async (id, task)=>{
  try {
    const tasksArray = await getAllTasks()
    datos = tasksArray.findIndex((e) => e.id === id)
    
    
    const newTask ={
      ...tasksArray[datos],
      ...task
    };
    
    const taskUpdate = tasksArray.map((e)=>{
      if(e.id === id){
        return newTask
      }
      return e
    })
    await fs.writeFile(TASK_PATH, JSON.stringify(taskUpdate))
  } catch (error) {
    
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTasks,
  deleteTaskByID, 
  updateTasksById
};
