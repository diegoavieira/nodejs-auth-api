import bodyParser from 'body-parser';

module.exports = app => {
  app.disable('x-powered-by');

  app.set('port', process.env.PORT || 8000);
  app.set('json spaces', 2);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
