import { Router } from 'express';
import { userRoute, authRoute, parentRoute, themeRoute } from './routes';

const api = Router();

api.use('/users', userRoute);
api.use('/auth', authRoute);
api.use('/parents', parentRoute);
api.use('/themes', themeRoute);

export default api;
