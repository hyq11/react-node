const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, require: true }
})
//#endregion
const userModel = mongoose.model('users', userSchema)