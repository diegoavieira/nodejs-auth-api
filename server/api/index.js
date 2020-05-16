import { Router } from 'express';
import { homeRoute, userRoute, parentRoute, themeRoute } from './routes';

const api = Router();

api.use('/', homeRoute);
api.use('/users', userRoute);
api.use('/parents', parentRoute);
api.use('/themes', themeRoute);

export default api;
