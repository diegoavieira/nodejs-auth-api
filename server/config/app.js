import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import logger from './logger';
import keycloak from './keycloak';
import web from '../web';
import api from '../api';

const app = express();

app.set('views', path.join(__dirname, '../web/views'));
app.set('view engine', 'pug');
app.set('json spaces', 2);

app.use(morgan('dev', { stream: logger.stream }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (!req.headers.authorization) {
    req.headers.authorization = 'Bearer ';
  }
  next();
});

app.use(keycloak.middleware());
app.use('/', web);
app.use('/api', api);

app.use('*', (req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} does not exists` });
});

app.use((err, req, res) => {
  res.json({ message: err.message });
});

export default app;
