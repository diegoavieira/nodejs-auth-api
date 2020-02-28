import bodyParser from 'body-parser';

const commons = app => {
  app.disable('x-powered-by');

  app.set('port', process.env.PORT || 8000);
  app.set('json spaces', 2);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

export { commons };
