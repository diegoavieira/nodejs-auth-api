import wrapAsync from '../utils/wrap-async';
import { UserController } from '../controllers';

const userRouter = require('express').Router();

userRouter
  .route('/')
  .get(wrapAsync(UserController.findAll))
  .post(wrapAsync(UserController.create));

export default userRouter;
