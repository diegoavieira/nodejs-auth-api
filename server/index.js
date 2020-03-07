import sequelize from './config/sequelize';
import app from './config/app';
import logger from './util/logger';

const port = app.get('port');

sequelize
  .sync({ force: false })
  .then(() => {
    logger.info('Models synchronized');
    app.listen(port, () => logger.info(`Server running at port ${port}`));
  })
  .catch(error => logger.error(error.message));
