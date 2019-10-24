const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    birthd
})
//#endregion
const userModel = mongoose.model('users', userSchema)