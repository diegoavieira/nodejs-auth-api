import { Router } from 'express';
import wrapAsync from '../../middlewares/wrap-async';
import { userController } from '../controllers';
import jwtCheck from '../../middlewares/jwt-check';

const userRoute = Router();

userRoute
  .route('/')
  .all(jwtCheck())
  .post(wrapAsync(userController.create))
  .get(wrapAsync(userController.getAll));

userRoute
  .route('/:id')
  .all(jwtCheck())
  .get(wrapAsync(userController.getById))
  .put(wrapAsync(userController.update))
  .delete(wrapAsync(userController.delete));

export { userRoute };
