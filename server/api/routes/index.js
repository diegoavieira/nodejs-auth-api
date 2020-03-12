import { Router } from 'express';
import userRoute from './user.route';
import authRoute from './auth.route';
import parentRoute from './parent.route';
import themeRoute from './theme.route';

const routes = Router();

routes.use('/users', userRoute);
routes.use('/auth', authRoute);
routes.use('/parents', parentRoute);
routes.use('/themes', themeRoute);

export default routes;
