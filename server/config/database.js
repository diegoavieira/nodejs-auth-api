import Sequelize from 'sequelize';
import env from './env';

const sequelize = new Sequelize(env.database_url);

export { Sequelize, sequelize };
