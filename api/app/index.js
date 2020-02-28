import express from 'express';
import { tasksRoutes, usersRoutes } from '../routes';
import { commonsMiddlewares, errorsMiddlewares } from '../middlewares';

const app = express();

// Middlewares
commonsMiddlewares(app);

// Routes
tasksRoutes(app);
usersRoutes(app);

// Errors
errorsMiddlewares(app);

export default app;
