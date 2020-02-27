import { models } from '../models';
import wrapAsync from '../utils';

const { Users } = models;

export default app => {
  app.route('/users').get(
    wrapAsync(async (req, res) => {
      await Users.findAll({}).then(users => {
        res.json({ users });
      });
    })
  );
};
