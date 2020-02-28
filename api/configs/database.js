import Sequelize from 'sequelize';
import { development } from './environments';

const { db } = development;

const sequelize = new Sequelize(
  db.database,
  db.username,
  db.password,
  db.params
);

export { Sequelize, sequelize };
