import http from 'http';
import app from './app';
import { sequelize } from './models';

const server = http.createServer(app);
const port = app.get('port');

sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Api running at port ${port}`);
  });
});
