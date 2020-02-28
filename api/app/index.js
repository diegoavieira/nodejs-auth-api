import express from 'express';
import { commons, routes } from '../middlewares';

const app = express();

commons(app);

routes(app);

export default app;
