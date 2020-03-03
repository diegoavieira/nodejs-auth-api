import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import routes from '../routes';
import { envs, isProd } from '../config/environments';

export default app => {
  app.disable('x-powered-by');

  app.set('port', envs.port);
  app.set('json spaces', 2);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  if (isProd) {
    app.use(compression());
  } else {
    app.use(morgan('dev'));
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
