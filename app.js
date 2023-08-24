require('dotenv').config();
const express = require('express');
// Initialize App
const app = express();

// Set template engine
app.set('view engine', 'pug');

app.use(express.static('public'));

// Routes
const tasksRouter = require('./routes/tasks');
const errorHandler = require('./middleware/error-handler');

// Middlewares
app.use(express.json());

app.use('/', tasksRouter);

app.use(errorHandler);

// Start App
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});