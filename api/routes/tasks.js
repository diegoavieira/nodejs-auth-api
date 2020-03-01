import { wrapAsync } from '../utils';
import { getTasks } from '../controllers';

const router = require('express').Router();

router.route('/').get(wrapAsync(getTasks));

export default router;
