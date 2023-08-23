require('dotenv').config();
const express = require('express');
// Initialize App
const app = express();

let tasks = [];

// Middlewares
app.use(express.json());

// Get All Tasks
app.get('/', (req, res) => {
  res.status(200).render('index');
});

// Create New Task
app.post('/', (req, res) => {
  const { title, isCompleted } = req.body;
  const task = {
    id: Date.now(),
    title,
    isCompleted
  }
  tasks.push(task);
  console.log(tasks);
  res.status(201).json({ success: true, task });
});

// Update Task
app.put('/:id', (req, res) => {
  const { title, isCompleted } = req.body;
  const updatedTask = {
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
});

// Delete Single Task
app.delete('/:id', (req, res) => {
  const { id: taskId } = req.params;
  tasks = tasks.filter(task => task['id'] !== Number(taskId));
  console.log(tasks);
  res.status(200).json({ success: true, message: 'Task has been deleted successfully' });
});

// Start App
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});