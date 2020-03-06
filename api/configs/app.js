import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import Routers from '../routers';
import { env, isProd } from './environment';
import logger from '../utils/logger';

const app = express();

app.disable('x-powered-by');

app.set('port', env.port);
app.set('json spaces', 2);

app.use(isProd ? compression() : morgan('dev', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', Routers);

app.use('*', (req, res) => {
  res
    .status(404)
    .json({ message: `Route ${req.originalUrl} does not exists.` });
});

app.use((err, req, res) => {
  res.json({ message: err.message });
});

export default app;
