const LaceSchema = require("../models/lace");

const createLace = async (reqBody) => {
  const lace = await LaceSchema.create(reqBody);
  return lace;
};

const getLaces = async () => {
  const lace = await LaceSchema.find();
  return lace;
};

const getLaceById = async (laceId) => {
  const lace = await LaceSchema.findById(laceId);
  if (!lace) {
    throw new Error("Not found");
  }
  return lace;
};

const deleteLace = async (laceId) => {
  const lace = await getLaceById(laceId);
  await lace.remove();
  return lace;
};

const updateLace = async (laceId, updateParam) => {
  const lace = await getLaceById(laceId);
  Object.assign(lace, updateParam);
  lace.save();
  return lace;
};

module.exports = {
  createLace,
  getLaces,
  getLaceById,
  deleteLace,
  updateLace,
};
