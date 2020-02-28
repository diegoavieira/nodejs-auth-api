import { models } from '../models';
import { wrapAsync } from '../utils';

const { Tasks } = models;

const tasks = app => {
  app.route('/tasks').get(
    wrapAsync(async (req, res) => {
      await Tasks.findAll({}).then(result => {
        res.json({ result });
      });
    })
  );
};

export { tasks };
