// Lace schema
const laceSchema = new mogoose.Schema({
    name: {
        type: String,
        required: true,
    },
    laceImg: Buffer,
    pattern: Buffer,
});
const laceSchema = mongoose.model("laceSchema", laceSchema);
module.exports = laceSchema;