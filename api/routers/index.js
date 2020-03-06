import UserRouter from './user.router';
import TaskRouter from './task.router';

const Routers = require('express').Router();

Routers.use('/user', UserRouter);
Routers.use('/task', TaskRouter);

export default Routers;
