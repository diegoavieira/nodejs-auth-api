import userRouter from './user.router';

const routers = require('express').Router();

routers.use('/users', userRouter);

export default routers;
