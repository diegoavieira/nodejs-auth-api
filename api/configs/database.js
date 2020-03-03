import Sequelize from 'sequelize';
import environments from './environments';

const sequelize = new Sequelize(environments.database_url, {
  dialect: 'postgres'
});

export { Sequelize, sequelize };
