const shoeSchema = new mongoose.Schema({
  modelName: {
    type: String,
  },
  defaultPicture: {
    type: Buffer,
  },
  shoeBody: {
    type: Buffer,
  },
  laceVariant: {
    type: Buffer,
  },
});
