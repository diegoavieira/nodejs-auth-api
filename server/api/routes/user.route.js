import { Router } from 'express';
import wrapAsync from '../../util/wrap-async';
import { userController } from '../controllers';

const userRoute = Router();

userRoute
  .route('/')
  .get(wrapAsync(userController.findAll))
  .post(wrapAsync(userController.create));

export default userRoute;
