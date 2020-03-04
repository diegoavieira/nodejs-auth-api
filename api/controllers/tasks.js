import { Tasks } from '../models';

const createTask = async (req, res) => {
  try {
    const result = await Tasks.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const result = await Tasks.findAll();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Tasks.findOne({
      where: { id }
    });

    if (result) {
      res.status(200).json({ result });
    }

    res.status(404).json({ message: 'Not found.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Tasks.findOne({
      where: { id }
    });

    if (result) {
      res.status(200).json({ result });
    }

    res.status(404).json({ message: 'Not found.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createTask, getTasks, getTaskById, updateTask };
