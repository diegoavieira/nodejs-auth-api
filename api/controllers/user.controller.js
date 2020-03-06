import { UserModel } from '../models';

const UserController = {};

UserController.findAll = async (req, res) => {
  try {
    const result = await UserModel.findAll({});
    res.json(result);
  } catch (error) {
    res.status(412).json({ message: error.message });
  }
};

UserController.create = async (req, res) => {
  try {
    const result = await UserModel.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    res.status(415).json({ message: error.message });
  }
};

export { UserController };
