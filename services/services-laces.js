const ShoeSchema = require("../models/shoe");

const createShoe = async (reqBody) => {
  console.log(reqBody)
  const shoe = await ShoeSchema.create(reqBody);
  return shoe;
};

const getShoes = async () => {
  const shoe = await ShoeSchema.find();
  return shoe;
};

const getShoeById = async (shoeId) => {
  const shoe = await ShoeSchema.findById(shoeId);
  if (!shoe) {
    throw new Error("Not found");
  }
  return shoe;
};

const deleteShoe = async (shoeId) => {
  const shoe = await getShoeById(shoeId);
  await shoe.remove();
  return shoe;
};

const updateShoe = async (shoeId, updateParam) => {
  const shoe = await getShoeById(shoeId);
  Object.assign(shoe, updateParam);
  shoe.save();
  return shoe;
};

module.exports = {
  createShoe,
  getShoes,
  getShoeById,
  deleteShoe,
  updateShoe,
};
