const ColorSchema = require("../models/color");

const createColor = async (reqBody) => {
  const color = await ColorSchema.create(reqBody);
  return color;
};

const getColors = async () => {
  const colors = await ColorSchema.find();
  return colors;
};

const getColorById = async (colorId) => {
  const color = await ColorSchema.findById(colorId);
  if (!color) {
    throw new Error("Not found");
  }
  return color;
};

const deleteColorById = async (colorId) => {
  const color = await getColorById(colorId);
  console.log(color);
  await color.remove();
  return color;
};

const updateColorById = async (colorId, updateParam) => {
  const color = await getColorById(colorId);
  Object.assign(color, updateParam);
  color.save();
  return color;
};

module.exports = {
  createColor,
  getColors,
  getColorById,
  deleteColorById,
  updateColorById,
};
