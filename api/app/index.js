import express from 'express';
import { tasks, users } from '../routes';
import { commons, errors } from '../middlewares';

const app = express();

// Middlewares
commons(app);

// Routes
tasks(app);
users(app);

// Errors
errors(app);

export default app;
