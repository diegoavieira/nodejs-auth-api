import users from './users';
import tasks from './tasks';

const router = require('express').Router();

router.use('/users', users);
router.use('/tasks', tasks);

export default router;
