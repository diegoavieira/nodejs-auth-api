import { wrapAsync } from '../utils';
import { getTasks } from '../controllers';

const tasks = app => {
  app.route('/tasks').get(wrapAsync(getTasks));
};

export { tasks };
