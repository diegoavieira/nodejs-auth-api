import { wrapAsync } from '../utils';
import { getTasks } from '../controllers';

export default app => {
  app.route('/tasks').get(wrapAsync(getTasks));
};
