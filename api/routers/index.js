import userRouter from './user.router';

const routers = require('express').Router();

routers.use('/user', userRouter);

export default routers;
