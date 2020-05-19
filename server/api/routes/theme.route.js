import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { themeController } from '../controllers';

const themeRoute = Router();

themeRoute
  .route('/')
  .post(wrapAsync(themeController.create))
  .get(wrapAsync(themeController.getAll));

themeRoute
  .route('/:id')
  .get(wrapAsync(themeController.getById))
  .put(wrapAsync(themeController.update))
  .delete(wrapAsync(themeController.delete));

export { themeRoute };
