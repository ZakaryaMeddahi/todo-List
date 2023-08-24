require('dotenv').config();
const express = require('express');
// Initialize App
const app = express();

// Set template engine
app.set('view engine', 'pug');

// Routes
const tasksRouter = require('./routes/tasks');

// Middlewares
app.use(express.json());

app.use('/', tasksRouter);

app.use(express.static('public'));

// Start App
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});