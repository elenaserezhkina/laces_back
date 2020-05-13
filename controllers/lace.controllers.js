const laceService = require("../services/services.laces");

const createLace = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const lace = await laceService.createLace({
      title: req.body.title,
    });
    res.status(200).json({ result: lace });
  } catch (err) {
    next(err);
  }
};

const getLaces = async (req, res, next) => {
  try {
    const lace = await laceService.getLaces();
    res.status(200).json({ result: lace });
  } catch (err) {
    next(err);
  }
};

const getLaceById = async (req, res, next) => {
  try {
    const lace = await laceService.getLaceById(req.params.id);
    res.status(200).json({ result: lace });
  } catch (err) {
    next(err);
  }
};

const deleteLace = async (req, res, next) => {
  try {
    const lace = await laceService.deleteLace(req.params.id);
    res.status(200).json({ result: "done", deletedLace: lace });
  } catch (err) {
    next(err);
  }
};

const updateLace = async (req, res, next) => {
  try {
    const lace = await laceService.updateLace(req.params.id, req.body);
    res.status(200).json({ result: "done", updatedLace: lace });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createLace,
  getLaces,
  getLaceById,
  deleteLace,
  updateLace,
};
