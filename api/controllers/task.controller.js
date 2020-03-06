import { TaskModel } from '../models';

const TaskController = {};

TaskController.create = async (req, res) => {
  try {
    const result = await TaskModel.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

TaskController.findAll = async (req, res) => {
  try {
    const result = await TaskModel.findAll();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

TaskController.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskModel.findOne({
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

TaskController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskModel.findOne({
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

export { TaskController };
