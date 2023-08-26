const { NotFoundError, BadRequestError } = require("../errors");

let tasks = [];

// Get All Tasks
const getTasks = (req, res) => {
  res.status(200).render('index', { tasks });
}

// Create New Task
const createTask = (req, res) => {
  const { title, isCompleted } = req.body;

  if(!title) {
    const err = new BadRequestError('Please Provide A Title For The Task');
    throw err;
  }
  const task = {
    id: Date.now(),
    title,
    isCompleted: isCompleted || false
  }
  tasks.push(task);
  console.log(tasks);
  res.status(201).json({ success: true, task });
}

// Update Task
const updateTask = (req, res) => {
  const { title, isCompleted } = req.body;
  const taskId = Number(req.params.id);
  let modified = false;
  let updatedTask = {
    title,
    isCompleted
  }
  tasks.forEach(task => {
    console.log(task['id'], ' === ', taskId);
    if(task['id'] === taskId) {
      updatedTask = Object.assign(task, updatedTask);
      modified = true;
      return;
    }
  });
  if(!modified) {
    const err = new NotFoundError(`No Task With The ID ${taskId}`);
    throw err;
  }
  console.log(tasks);
  res.status(200).json({ success: true, updatedTask });
}

// Delete Single Task
const deletetask = (req, res) => {
  const { id: taskId } = req.params;
  const length = tasks.length;
  tasks = tasks.filter(task => task['id'] !== Number(taskId));
  if(tasks.length === length) {
    const err = new NotFoundError(`No Task With The ID ${taskId}`);
    throw err;
  }
  console.log(tasks);
  res.status(200).json({ success: true, message: 'Task has been deleted successfully' });
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deletetask
}