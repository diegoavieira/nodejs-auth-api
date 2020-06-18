import { Sequelize } from 'sequelize';
import config from '../config';
import { logger } from '../utils';

const database = new Sequelize(config.env.database_uri, {
  dialect: 'postgres',
  logging: config.isDev ? logger.stream.write : false,
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  }
});

export default database;
