import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { themeController } from '../controllers';
import verifyAuth from '../../middleware/verify-auth';

const themeRoute = Router();

themeRoute
  .route('/')
  .post(verifyAuth, wrapAsync(themeController.create))
  .get(wrapAsync(themeController.getAll));

themeRoute
  .route('/:id')
  .all(verifyAuth)
  .get(wrapAsync(themeController.getById))
  .put(wrapAsync(themeController.update))
  .delete(wrapAsync(themeController.delete));

export { themeRoute };
