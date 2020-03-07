import { userModel } from '../models';

const userController = {};

userController.findAll = async (req, res) => {
  try {
    const result = await userModel.findAll({});
    res.json(result);
  } catch (error) {
    res.status(412).json({ message: error.message });
  }
};

userController.create = async (req, res) => {
  try {
    const result = await userModel.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    res.status(415).json({ message: error.message });
  }
};

export { userController };
