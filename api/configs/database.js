import Sequelize from 'sequelize';
import { env, isDev } from './environment';
import logger from '../utils/logger';

const sequelize = new Sequelize(env.database_url, {
  dialect: 'postgres',
  logging: isDev ? logger.stream.write : false
});

export { Sequelize, sequelize };
