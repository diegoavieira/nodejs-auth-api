import { Router } from 'express';
import { userController } from '../controllers';
import { jwtCheck, wrapAsync } from '../middlewares';

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
