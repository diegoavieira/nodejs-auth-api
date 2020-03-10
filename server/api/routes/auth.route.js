import { Router } from 'express';
import wrapAsync from '../../util/wrap-async';
import { authController } from '../controllers';

const authRoute = Router();

authRoute.route('/login').post(wrapAsync(authController.login));
authRoute.route('/refresh').post(wrapAsync(authController.refresh));

export default authRoute;
