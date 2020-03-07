import { Sequelize } from 'sequelize';
import { env, isDev } from './environment';
import logger from '../util/logger';

const database = new Sequelize(env.database_url, {
  dialect: 'postgres',
  logging: isDev ? logger.stream.write : false,
  define: {
    freezeTableName: true,
    underscored: true
  }
});

export default database;
