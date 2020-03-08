import { userModel } from '../models';

const userController = {};

userController.create = async (req, res) => {
  try {
    const data = await userModel.create(req.body);
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.getAll = async (req, res) => {
  try {
    const data = await userModel.findAll({});
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await userModel.findOne({ where: { id } });

    if (data) {
      res.status(200).json({ data });
    }

    res.status(404).json({ data: null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await userModel.update(req.body, {
      where: { id }
    });

    if (updated) {
      const data = await userModel.findOne({ where: { id: updated } });
      res.status(200).json({ data });
    }

    res.status(404).json({ data: null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await userModel.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(204).json({ data: null });
    }

    res.status(404).json({ data: null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { userController };
