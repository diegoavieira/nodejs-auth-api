import { Router } from 'express';
import { homeController } from '../controllers';

const homeRoute = Router();

homeRoute.route('/').get(homeController.render);

export { homeRoute };
