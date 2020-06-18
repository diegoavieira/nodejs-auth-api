import { Sequelize } from 'sequelize';
import { env, isDev } from '../config';
import logger from '../utils/logger';

const database = new Sequelize(env.database_uri, {
  dialect: 'postgres',
  logging: isDev ? logger.stream.write : false,
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  }
});

export default database;
