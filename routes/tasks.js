const router = require('express').Router();
const {
  getTasks,
  createTask,
  updateTask,
  deletetask
} = require('../controllers/tasks');

router.route('/').get(getTasks).post(createTask);
router.route('/:id').put(updateTask).delete(deletetask);

module.exports = router