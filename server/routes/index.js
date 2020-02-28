import users from './users';
import tasks from './tasks';

export default app => {
  users(app);
  tasks(app);

  // import routes here

  app.use('*', (req, res) => {
    res
      .status(404)
      .json({ message: `Route ${req.originalUrl} does not exists.` });
  });

  app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error.' });
  });
};
