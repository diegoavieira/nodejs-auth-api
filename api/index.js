import { sequelize } from './configs/database';
import app from './configs/app';
import logger from './utils/logger';

const port = app.get('port');

sequelize
  .authenticate()
  .then(async () => {
    try {
      await sequelize.sync();
      app.listen(port);
    } catch (error) {
      return logger.error(error.message);
    }
  })
  .catch(error => logger.error(error.message));
