const mongoose = require('mongoose');
const User = require('../../models/shoe.model');

// const file1 = new Data({ binData: 'test' }); // {"type":"Buffer","data":[116,101,115,116]}
// const file2 = new Data({ binData: 'test2' }); // {"type":"Buffer","data":[116,101,115,116]}


const shoeOne = {
    _id: mongoose.Types.ObjectId(),
    brand: "nike",
    colorVariant: [{
        color: "white",
        image: { binData: 'test' }
    }],
    laceImg: { binData: 'test' }
};
const shoeTwo = {
    _id: mongoose.Types.ObjectId(),
    brand: "Converse",
    colorVariant: [{
        color: "red",
        image:{ binData: 'test' }
    }],
    laceImg: { binData: 'test' }
};
const insertShoes = async users => {
    await User.insertMany(users.map(user => ({ ...user })));
};

module.exports = {
    shoeOne,
    shoeTwo,
    insertShoes,
};
