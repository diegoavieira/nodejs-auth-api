import { Tasks } from '../models';

const getTasks = async (req, res) => {
  try {
    const result = await Tasks.findAll({});
    res.json(result);
  } catch (error) {
    res.status(412).json({ message: error.message });
  }
};

export { getTasks };
