import express from 'express';
import http from 'http';
import middlewares from './configs/middlewares';
import { sequelize } from './configs/database';

const app = express();

middlewares(app);

sequelize.sync().then(() => {
  const port = app.get('port');

  http.createServer(app).listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
});
