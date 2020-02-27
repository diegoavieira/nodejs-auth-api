import express from 'express';
import consign from 'consign';

const app = express();

consign({ cwd: 'api', verbose: true })
  .include('libs/middlewares.js')
  .then('routes')
  .into(app);

export default app;
