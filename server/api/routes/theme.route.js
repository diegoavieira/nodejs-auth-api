import { Router } from 'express';
import { check } from 'express-validator';
import { themeController } from '../controllers';
import { validate, jwtCheck, wrapAsync } from '../middlewares';

const themeRoute = Router();

themeRoute
  .route('/')
  .all(jwtCheck())
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
  .all(jwtCheck())
  .get(wrapAsync(themeController.getById))
  .put(wrapAsync(themeController.update))
  .delete(wrapAsync(themeController.delete));

themeRoute.route('/name/:name').get(wrapAsync(themeController.getByName));

export { themeRoute };
