import { wrapAsync } from '../utils';
import { getTasks, createTask, getTaskById } from '../controllers';

const router = require('express').Router();

router
  .route('/')
  .post(wrapAsync(createTask))
  .get(wrapAsync(getTasks));

router
  .route('/:id')
  .get(wrapAsync(getTaskById))
  .put(wrapAsync(createTask));

export default router;
