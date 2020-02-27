import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

const config = {
  db: {
    database: 'node_auth_api_db',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'db.sqlite',
      define: {
        underscored: true
      }
    }
  }
};

const basename = path.basename(__filename);
const models = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.params
);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export { models, sequelize, Sequelize };
