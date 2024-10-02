const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoginSchema = new Schema(
    {
        name: String,
        cart: Array
    }
)
const LoginUser = mongoose.model('login', LoginSchema)

module.exports = LoginUser;