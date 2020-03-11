import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { userController } from '../controllers';

const userRoute = Router();

userRoute
  .route('/')
  .post(wrapAsync(userController.create))
  .get(wrapAsync(userController.getAll));

userRoute
  .route('/:id')
  .get(wrapAsync(userController.getById))
  .put(wrapAsync(userController.update))
  .delete(wrapAsync(userController.delete));

export default userRoute;
