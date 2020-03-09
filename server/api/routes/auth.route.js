import { Router } from 'express';
import wrapAsync from '../../util/wrap-async';
import { authController } from '../controllers';

const authRoute = Router();

authRoute.route('/login').post(wrapAsync(authController.login));

export default authRoute;
