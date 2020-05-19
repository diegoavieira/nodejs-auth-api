import { Router } from 'express';
import wrapAsync from './middlewares/wrap-async';
import { userController } from '../controllers';
import keycloak from '../../config/keycloak';

const userRoute = Router();

userRoute
  .route('/')
  .all(keycloak.protect('user'))
  .post(wrapAsync(userController.create))
  .get(wrapAsync(userController.getAll));

userRoute
  .route('/:id')
  .all(keycloak.protect('user'))
  .get(wrapAsync(userController.getById))
  .put(wrapAsync(userController.update))
  .delete(wrapAsync(userController.delete));

export { userRoute };
