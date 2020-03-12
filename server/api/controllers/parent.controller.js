import { parentModel } from '../models';

const parentController = {};

parentController.create = async (req, res) => {
  try {
    const data = await parentModel.create(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

parentController.getAll = async (req, res) => {
  try {
    const data = await parentModel.findAll({ where: req.query || {} });
    return res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

parentController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await parentModel.findOne({ where: { id } });

    if (data) {
      return res.status(200).json({ data });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

parentController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await parentModel.update(req.body, {
      where: { id }
    });

    if (updated) {
      const data = await parentModel.findOne({ where: { id: updated } });
      return res.status(200).json({ data });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

parentController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await parentModel.destroy({
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

export { parentController };
