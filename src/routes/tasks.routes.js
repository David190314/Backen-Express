const { Router } = require('express');
const { getTasksCtrl, getTasksById, addTask, deleteTaskCtrl, updateTasksCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTasksById); // Obtener una tarea por su id -> Actividad
router.post('/tasks', addTask) // agregar una nueva tarea
router.delete('/tasks/:id', deleteTaskCtrl) // eliminar una nota
router.put('/tasks/:id', updateTasksCtrl)

module.exports = router;
