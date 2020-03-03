import { wrapAsync } from '../utils';
import { getUsers, createUser } from '../controllers';

const router = require('express').Router();

router
  .route('/')
  .get(wrapAsync(getUsers))
  .post(wrapAsync(createUser));

export default router;
