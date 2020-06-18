import database from './database';
import app from './app';
import logger from './utils/logger';
import { env } from './config';

database
  .sync({ force: false })
  .then(() => {
    logger.info('Models synchronized');
    app.listen(env.port, () => logger.info(`Server running at port ${env.port}`));
  })
  .catch(error => logger.error(error.message));
