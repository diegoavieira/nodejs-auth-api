import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { userController } from '../controllers';
import verifyAuth from '../../middleware/verify-auth';

const userRoute = Router();

userRoute
  .route('/')
  .all(verifyAuth)
  .post(wrapAsync(userController.create))
  .get(wrapAsync(userController.getAll));

userRoute
  .route('/:id')
  .all(verifyAuth)
  .get(wrapAsync(userController.getById))
  .put(wrapAsync(userController.update))
  .delete(wrapAsync(userController.delete));

export default userRoute;
