import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { userController } from '../controllers';
import verifyAuth from '../../middleware/verify-auth';
import verifyPermission from '../../middleware/verify-permission';

const userRoute = Router();

userRoute
  .route('/')
  .all(verifyAuth)
  .post(wrapAsync(userController.create))
  .get(verifyPermission('read:users'), wrapAsync(userController.getAll));

userRoute
  .route('/:id')
  .all(verifyAuth)
  .get(wrapAsync(userController.getById))
  .put(wrapAsync(userController.update))
  .delete(wrapAsync(userController.delete));

export { userRoute };
