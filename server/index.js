import database from './database';
import app from './app';
import { logger } from './utils';
import config from './config';

database
  .sync({ force: false })
  .then(() => {
    logger.info('Models synchronized');
    app.listen(config.env.port, () => logger.info(`Server running at port ${config.env.port}`));
  })
  .catch(error => logger.error(error.message));
