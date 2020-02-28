import http from 'http';
import app from './app';
import { sequelize } from './configs';

const server = http.createServer(app);
const port = app.get('port');

sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
});
