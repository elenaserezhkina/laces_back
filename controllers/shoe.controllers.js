const shoeService = require("../services/services.shoes");

const createShoe = async (req, res, next) => {
  console.log("test", req.body.brand);
  try {
    const shoe = await shoeService.createShoe({
      brand: req.body.brand,
      colorVariants: req.body.colorVariants,
      laceImg: req.body.laceImg,
      favorite: req.body.favorite,
    });
    res.status(201).json({ result: shoe });
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
