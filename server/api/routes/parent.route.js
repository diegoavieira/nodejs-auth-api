import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { parentController } from '../controllers';
import verifyAuth from '../../middleware/verify-auth';

const parentRoute = Router();

parentRoute
  .route('/')
  .post(verifyAuth, wrapAsync(parentController.create))
  .get(wrapAsync(parentController.getAll));

parentRoute
  .route('/:id')
  .all(verifyAuth)
  .get(wrapAsync(parentController.getById))
  .put(wrapAsync(parentController.update))
  .delete(wrapAsync(parentController.delete));

export { parentRoute };
