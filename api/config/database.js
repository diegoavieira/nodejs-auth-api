import Sequelize from 'sequelize';
import { envs, isProd } from './environments';

const sequelize = new Sequelize(envs.database_url, {
  dialect: 'postgres',
  logging: !isProd
});

export { Sequelize, sequelize };
