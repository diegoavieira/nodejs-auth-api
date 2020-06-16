import { Router } from 'express';
import { authRoute, userRoute, parentRoute, themeRoute } from './routes';

const api = Router();

api.use('/auth', authRoute);
api.use('/users', userRoute);
api.use('/parents', parentRoute);
api.use('/themes', themeRoute);

export default api;
