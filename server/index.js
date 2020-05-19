import database from './config/database';
import app from './config/app';
import logger from './config/logger';
import { env } from './config/environment';

database
  .sync({ force: false })
  .then(() => {
    logger.info('Models synchronized');
    app.listen(env.port, () => logger.info(`Server running at port ${env.port}`));
  })
  .catch(error => logger.error(error.message));
