import { models } from '../models';

const { Tasks } = models;

module.exports = app => {
  app.get('/tasks', (req, res) => {
    Tasks.findAll({}).then(tasks => {
      res.json({ tasks });
    });
  });
};
