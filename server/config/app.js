import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './logger';
import api from '../api';

const app = express();

app.disable('x-powered-by');

app.set('json spaces', 2);

app.use(morgan('dev', { stream: logger.stream }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', api);

app.use('*', (req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} does not exists` });
});

app.use((err, req, res) => {
  res.json({ message: err.message });
});

export default app;
