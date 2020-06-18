import { userModel } from '../../models';

const userController = {};

userController.create = async (req, res) => {
  try {
    const data = await userModel.create(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

userController.getAll = async (req, res) => {
  try {
    const data = await userModel.findAll({});
    return res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await userModel.findOne({ where: { id } });

    if (data) {
      return res.status(200).json({ data });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
      return res.status(200).json({ data });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

userController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await userModel.destroy({
      where: { id }
    });

    if (deleted) {
      return res.status(204).json({ data: null });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { userController };
