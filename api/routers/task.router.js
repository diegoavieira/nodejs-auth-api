import wrapAsync from '../utils/wrap-async';
import { TaskController } from '../controllers';

const TaskRouter = require('express').Router();

TaskRouter.route('/')
  .post(wrapAsync(TaskController.create))
  .get(wrapAsync(TaskController.findAll));

TaskRouter.route('/:id')
  .get(wrapAsync(TaskController.findOne))
  .put(wrapAsync(TaskController.update));

export default TaskRouter;
