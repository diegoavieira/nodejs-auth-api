import express from 'express';
import { tasksRoutes, usersRoutes } from '../routes';
import commonsMiddlewares from '../middlewares';

const app = express();

// Middlewares
commonsMiddlewares(app);

// Routes
tasksRoutes(app);
usersRoutes(app);

export default app;
