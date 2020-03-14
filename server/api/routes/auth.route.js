import { Router } from 'express';
import wrapAsync from '../../middleware/wrap-async';
import { authController } from '../controllers';
import { check } from 'express-validator';
import validate from '../../middleware/validate';

const authRoute = Router();

authRoute.route('/login').post(
  validate([
    check('username')
      .not()
      .isEmpty(),
    check('password')
      .not()
      .isEmpty()
  ]),
  wrapAsync(authController.login)
);

authRoute.route('/refresh').post(
  validate([
    check('refresh_token')
      .not()
      .isEmpty()
  ]),
  wrapAsync(authController.refresh)
);

export { authRoute };
