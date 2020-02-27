import express from 'express';
import tasksRoutes from '../routes';
import commonsMiddlewares from '../middlewares';

const app = express();

// Middlewares
commonsMiddlewares(app);

// Routes
tasksRoutes(app);

export default app;
