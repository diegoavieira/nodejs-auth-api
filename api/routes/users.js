import { wrapAsync } from '../utils';
import { getUsers, createUser } from '../controllers';

const users = app => {
  app
    .route('/users')
    .get(wrapAsync(getUsers))
    .post(wrapAsync(createUser));
};

export { users };
