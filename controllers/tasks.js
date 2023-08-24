
let tasks = [];

// Get All Tasks
const getTasks = (req, res) => {
  res.status(200).render('index');
}

// Create New Task
const createTask = (req, res) => {
  const { title, isCompleted } = req.body;
  const task = {
    id: Date.now(),
    title,
    isCompleted
  }
  tasks.push(task);
  console.log(tasks);
  res.status(201).json({ success: true, task });
}

// Update Task
const updateTask = (req, res) => {
  const { title, isCompleted } = req.body;
  let updatedTask = {
    title,
    isCompleted
  }
  tasks.forEach(task => {
    const taskId = Number(req.params.id);
    console.log(task['id'], ' === ', taskId);
    if(task['id'] === taskId) {
      updatedTask = Object.assign(task, updatedTask);
      return;
    }
  });
  console.log(tasks);
  res.status(200).json({ success: true, updatedTask });
}

// Delete Single Task
const deletetask = (req, res) => {
  const { id: taskId } = req.params;
  tasks = tasks.filter(task => task['id'] !== Number(taskId));
  console.log(tasks);
  res.status(200).json({ success: true, message: 'Task has been deleted successfully' });
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deletetask
}