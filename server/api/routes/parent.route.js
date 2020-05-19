import { Router } from 'express';
import wrapAsync from './middlewares/wrap-async';
import { parentController } from '../controllers';

const parentRoute = Router();

parentRoute
  .route('/')
  .post(wrapAsync(parentController.create))
  .get(wrapAsync(parentController.getAll));

parentRoute
  .route('/:id')
  .get(wrapAsync(parentController.getById))
  .put(wrapAsync(parentController.update))
  .delete(wrapAsync(parentController.delete));

export { parentRoute };
