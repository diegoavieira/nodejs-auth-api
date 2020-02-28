import { models } from '../models';

const { Users } = models;

const getUsers = async (req, res) => {
  try {
    const result = await Users.findAll({
      attributes: { exclude: ['password'] },
      order: [['id', 'ASC']]
    });
    res.json(result);
  } catch (error) {
    res.status(412).json({ message: error.message });
  }
};

const getUserById = () => {};

const createUser = async (req, res) => {
  try {
    const result = await Users.create(req.body);
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getUsers, getUserById, createUser };
