const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
mongoose.promise = Promise;

const UserSchema = new Schema(
    {
        email: { type: String, unique: true },
        password: String,
        cart: Array
    }
)

UserSchema.methods = {
    // to check if password is valid
    checkPass: function (userPass) {
        return bcrypt.compareSync(userPass, this.password)
    },
    // to hash plain text password
    hashPass: function (plainTextPass) {
        return bcrypt.hashSync(plainTextPass, 10)
    }
}

UserSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('No password provided');
        next();
    } else {
        console.log('hashPass in pre-save');
        this.password = this.hashPass(this.password);
        next();
    }
})

const User = mongoose.model('user', UserSchema)
module.exports = User;

