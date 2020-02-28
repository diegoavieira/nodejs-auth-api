import { models } from '../models';
import { wrapAsync } from '../utils';

const { Tasks } = models;

export default app => {
  app.route('/tasks').get(
    wrapAsync(async (req, res) => {
      await Tasks.findAll({}).then(tasks => {
        res.json({ tasks });
      });
    })
  );
};
