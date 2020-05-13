const mongoose = require('mongoose');
require('dotenv').config();

const setupTestDB = () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    beforeEach(async () => {
        await Promise.all(Object.values(mongoose.connection.collections).map(async collection => collection.deleteMany()));
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
};

module.exports = setupTestDB;
