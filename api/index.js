import http from 'http';
import app from './configs/app';
import { sequelize } from './configs/database';
import logger from './utils/logger';

const port = app.get('port');

sequelize
  .authenticate()
  .then(() => {
    return sequelize
      .sync()
      .then(() => {
        logger.info('Models synchronized');
        logger.info('Database connected');
      })
      .catch(error => logger.error(error.message));
  })
  .then(() => {
    http.createServer(app).listen(port, () => {
      logger.info(`Server running at port ${port}`);
    });
  })
  .catch(error => logger.error(error.message));
