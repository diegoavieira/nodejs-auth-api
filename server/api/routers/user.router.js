import wrapAsync from '../../util/wrap-async';
import { userController } from '../controllers';

const userRouter = require('express').Router();

userRouter
  .route('/')
  .get(wrapAsync(userController.findAll))
  .post(wrapAsync(userController.create));

export default userRouter;
