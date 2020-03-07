import { Sequelize } from 'sequelize';
import { env, isDev } from './environment';
import logger from '../util/logger';

const sequelize = new Sequelize(env.database_url, {
  dialect: 'postgres',
  logging: isDev ? logger.stream.write : false,
  define: {
    freezeTableName: true,
    underscored: true
  }
});

sequelize
  .authenticate()
  .then(() => logger.info('Database connected'))
  .catch(error => logger.error(error.message));

export default sequelize;
