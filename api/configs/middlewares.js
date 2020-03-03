import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import routes from '../routes';
import environments from './environments';

const nodeEnv = process.env.NODE_ENV || 'development';

export default app => {
  app.disable('x-powered-by');

  app.set('port', environments.port);
  app.set('json spaces', 2);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  if (nodeEnv === 'development') {
    app.use(morgan('dev'));
  }

  if (nodeEnv === 'production') {
    app.use(compression());
  }

  app.use('/api', routes);

  app.use('*', (req, res) => {
    res
      .status(404)
      .json({ message: `Route ${req.originalUrl} does not exists.` });
  });

  app.use((err, req, res) => {
    res.status(500).json({ message: 'Internal server error.' });
  });
};
