const shoeService = require("../services/services-laces");

const createShoe = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const shoe = await shoeService.createShoe({
      title: req.body.title,
    });
    res.status(200).json({ result: shoe });
  } catch (err) {
    next(err);
  }
};

const getShoes = async (req, res, next) => {
  try {
    const shoe = await shoeService.getShoes();
    res.status(200).json({ result: shoe });
  } catch (err) {
    next(err);
  }
};

const getShoeById = async (req, res, next) => {
  try {
    const shoe = await shoeService.getShoeById(req.params.id);
    res.status(200).json({ result: shoe });
  } catch (err) {
    next(err);
  }
};

const deleteShoe = async (req, res, next) => {
  try {
    const shoe = await shoeService.deleteShoe(req.params.id);
    res.status(200).json({ result: "done", deletedtodo: shoe });
  } catch (err) {
    next(err);
  }
};

const updateShoe = async (req, res, next) => {
  try {
    const shoe = await shoeService.updateShoe(req.params.id, req.body);
    res.status(200).json({ result: "done", updatedShoe: shoe });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createShoe,
  getShoes,
  getShoeById,
  deleteShoe,
  updateShoe,
};
