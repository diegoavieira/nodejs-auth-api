import { themeModel } from '../models';

const themeController = {};

themeController.create = async (req, res) => {
  try {
    const data = await themeModel.create(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

themeController.getAll = async (req, res) => {
  try {
    const data = await themeModel.findAll({ where: req.query || {} });
    return res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

themeController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await themeModel.findOne({ where: { id } });

    if (data) {
      return res.status(200).json({ data });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

themeController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await themeModel.update(req.body, {
      where: { id }
    });

    if (updated) {
      const data = await themeModel.findOne({ where: { id: updated } });
      return res.status(200).json({ data });
    }

    return res.status(404).json({ data: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

themeController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await themeModel.destroy({
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

export { themeController };
