import app from './config/app';
import { sequelize } from './models';

sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(`Api running at port ${app.get('port')}`);
  });
});
