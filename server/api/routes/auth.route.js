import { Router } from 'express';
import { check } from 'express-validator';
import { authController } from '../controllers';
import wrapAsync from './middlewares/wrap-async';
import validate from './middlewares/validate';

const authRoute = Router();

authRoute.route('/tokens').post(
  validate([
    check('username')
      .not()
      .isEmpty(),
    check('password')
      .not()
      .isEmpty()
  ]),
  wrapAsync(authController.tokens)
);

export { authRoute };
