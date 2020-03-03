import path from 'path';
import { sequelize } from '../config/database';

const Users = sequelize.import(path.join(__dirname, 'users'));
const Tasks = sequelize.import(path.join(__dirname, 'tasks'));

export { Users, Tasks };
