const colorService = require("../services/services.color");

const createColor = async (req, res, next) => {
  try {
    const color = await colorService.createColor({
      name: req.body.name,
      //colorImg: req.body.colorImg,
      //url: req.body.url,
    });
    res.status(200).json({ result: color });
  } catch (err) {
    next(err);
  }
};

const getColors = async (req, res, next) => {
  try {
    const colors = await colorService.getColors();
    res.status(200).json({ result: colors });
  } catch (err) {
    next(err);
  }
};

const getColorById = async (req, res, next) => {
  try {
    const color = await colorService.getColorById(req.params.id);
    res.status(200).json({ result: color });
  } catch (err) {
    next(err);
  }
};

const deleteColorById = async (req, res, next) => {
  try {
    const color = await colorService.deleteColorById(req.params.id);
    res.status(200).json({ result: "deleted", deletedColor: color });
  } catch (err) {
    next(err);
  }
};

const updateColorById = async (req, res, next) => {
  try {
    const color = await colorService.updateColorById(req.params.id, req.body);
    res.status(200).json({ result: "updated", updatedColor: color });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createColor,
  getColors,
  getColorById,
  deleteColorById,
  updateColorById,
};
