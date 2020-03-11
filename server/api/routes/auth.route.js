import { Router } from 'express';
import wrapAsync from '../../util/wrap-async';
import { authController } from '../controllers';
import { check } from 'express-validator';
import validator from '../../util/validator';

const authRoute = Router();

authRoute
  .route('/login')
  .post(
    [check('username').exists(), check('password').exists()],
    validator,
    wrapAsync(authController.login)
  );
authRoute
  .route('/refresh')
  .post(
    [check('refresh_token').exists()],
    validator,
    wrapAsync(authController.refresh)
  );

export default authRoute;
