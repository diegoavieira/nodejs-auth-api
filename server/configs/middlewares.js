import bodyParser from 'body-parser';
import routes from '../routes';
import env from './env';

export default app => {
  app.disable('x-powered-by');

  app.set('port', env.port);
  app.set('json spaces', 2);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

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
