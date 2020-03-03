import express from 'express';
import http from 'http';
import middlewares from './configs/middlewares';
import { sequelize } from './configs/database';

const app = express();

middlewares(app);

sequelize
  .authenticate()
  .then(() => {
    return sequelize
      .sync()
      .then(() => {
        console.log('Models synchronized');
        console.log('Database connected');
      })
      .catch(error => {
        console.log('Models not synchronized: ', error.message);
      });
  })
  .then(() => {
    const port = app.get('port');

    http.createServer(app).listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  })
  .catch(error => {
    console.log('Unable to connect to the database: ', error.message);
  });
