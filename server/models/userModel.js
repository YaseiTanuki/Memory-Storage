const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        require: true,
        unique: true
    },
    Password: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User;