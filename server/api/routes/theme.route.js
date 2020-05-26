import { Router } from 'express';
import wrapAsync from './middlewares/wrap-async';
import { themeController } from '../controllers';
import keycloak from '../../config/keycloak';
import validate from './middlewares/validate';
import { check } from 'express-validator';

const themeRoute = Router();

themeRoute
  .route('/')
  .all(keycloak.protect())
  .post(
    validate([
      check('name')
        .not()
        .isEmpty(),
      check('primary')
        .not()
        .isEmpty(),
      check('accent')
        .not()
        .isEmpty()
    ]),
    wrapAsync(themeController.create)
  )
  .get(wrapAsync(themeController.getAll));

themeRoute
  .route('/:id')
  .all(keycloak.protect())
  .get(wrapAsync(themeController.getById))
  .put(wrapAsync(themeController.update))
  .delete(wrapAsync(themeController.delete));

themeRoute.route('/name/:name').get(wrapAsync(themeController.getByName));

export { themeRoute };
