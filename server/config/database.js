import Sequelize from 'sequelize';
import env from './env';

const sequelize = new Sequelize(
  env.db_name,
  env.db_user,
  env.db_pass,
  env.db_params
);

export { Sequelize, sequelize };
