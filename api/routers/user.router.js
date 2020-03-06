import wrapAsync from '../utils/wrap-async';
import { UserController } from '../controllers';

const UserRouter = require('express').Router();

UserRouter.route('/')
  .get(wrapAsync(UserController.findAll))
  .post(wrapAsync(UserController.create));

export default UserRouter;
