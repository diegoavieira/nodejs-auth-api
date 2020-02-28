import { Users } from '../models';

const getUsers = async (req, res) => {
  try {
    const result = await Users.findAll({});
    res.json(result);
  } catch (error) {
    res.status(412).json({ message: error.message });
  }
};

const getUserById = () => {};

const createUser = async (req, res) => {
  try {
    const result = await Users.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    res.status(415).json({ message: error.message });
  }
};

export { getUsers, getUserById, createUser };
