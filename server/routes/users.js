import { wrapAsync } from '../utils';
import { getUsers, createUser } from '../controllers';

export default app => {
  app
    .route('/users')
    .get(wrapAsync(getUsers))
    .post(wrapAsync(createUser));
};
