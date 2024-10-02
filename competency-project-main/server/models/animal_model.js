const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnimalSchema = new Schema(
    {
        name: {type: String, unique: true},
        description: String,
        price: String,
        image: String
    }
)
const Animal = mongoose.model('animal', AnimalSchema)

module.exports = Animal;