const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    sex: { type: Number },
    birth: { type: Date },
    邮箱
})
//#endregion
const userModel = mongoose.model('users', userSchema)
module.exports = userModel