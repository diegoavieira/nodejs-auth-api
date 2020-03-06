import path from 'path';
import { sequelize } from '../configs/database';

const UserModel = sequelize.import(path.join(__dirname, 'user.model'));
const TaskModel = sequelize.import(path.join(__dirname, 'task.model'));

export { UserModel, TaskModel };
